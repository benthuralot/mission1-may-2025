require("dotenv").config();
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const axios = require("axios");
const { GoogleAuth } = require("google-auth-library");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Multer setup for file uploads (store in /uploads)
const upload = multer({ dest: path.join(__dirname, "uploads") });

const projectId = process.env.PROJECT_ID;
const region = process.env.REGION;
const endpointId = process.env.ENDPOINT_ID;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.post("/upload", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  try {
    // Read uploaded image and encode to base64
    const imageBytes = fs.readFileSync(req.file.path);
    const base64Content = imageBytes.toString("base64");

    // Get OAuth2 access token with correct scopes
    const auth = new GoogleAuth({
      scopes: "https://www.googleapis.com/auth/cloud-platform"
    });
    const client = await auth.getClient();
    const accessToken = await client.getAccessToken();

    // Use standard Vertex AI endpoint
    const url = `https://${region}-aiplatform.googleapis.com/v1/projects/${projectId}/locations/${region}/endpoints/${endpointId}:predict`;

    // Prepare request body with instances and parameters
    const requestBody = {
      instances: [{ content: base64Content }],
      parameters: {
        confidenceThreshold: 0.5,
        maxPredictions: 5,
      },
    };

    // Send prediction request
    const response = await axios.post(url, requestBody, {
      headers: {
        Authorization: `Bearer ${accessToken.token || accessToken}`,
        "Content-Type": "application/json",
      },
    });

    // Cleanup uploaded file after prediction
    fs.unlinkSync(req.file.path);

    // Return prediction response data
    return res.json(response.data);
  } catch (error) {
    console.error("Prediction error:", error.response ? error.response.data : error.message);

    // Cleanup uploaded file on error
    if (req.file) fs.unlinkSync(req.file.path);

    return res.status(500).json({ error: "Prediction failed." });
  }
});
