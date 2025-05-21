import { useState, useRef } from "react";
import { Car, GaugeCircle } from "lucide-react";
import "./App.css";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const dropRef = useRef(null);

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setResult(null);
      setPreviewUrl(URL.createObjectURL(file));
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setResult(null);
      setPreviewUrl(URL.createObjectURL(file));
    }
    dropRef.current.classList.remove("drag-over");
  }

  function handleDragOver(e) {
    e.preventDefault();
    dropRef.current.classList.add("drag-over");
  }

  function handleDragLeave(e) {
    dropRef.current.classList.remove("drag-over");
  }

  function formatPrediction(prediction) {
    const upperCaseTerms = ["SUV", "MPV", "EV", "4WD"];

    const normalized = prediction.trim().toLowerCase();

    if (upperCaseTerms.includes(normalized.toUpperCase())) {
      return normalized.toUpperCase();
    }

    return normalized.charAt(0).toUpperCase() + normalized.slice(1);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!selectedFile) return alert("Please upload a car image.");

    setLoading(true);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("image", selectedFile);

      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Prediction request failed");
      }

      const data = await response.json();

      const predictionRaw = data.predictions?.[0]?.displayNames?.[0] || "Unknown";
      const confidence = data.predictions?.[0]?.confidences?.[0] || 0;

      setResult({
        prediction: formatPrediction(predictionRaw),
        confidence: (confidence * 100).toFixed(2),
      });
    } catch (error) {
      alert("Error predicting image: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <header className="header">
        <img
          src="https://content.tgstatic.co.nz/webassets/contentassets/3e15c8546917474ca0a150b18e9fd64e/turnerscars_logo_1line_horz_true-rgb-desktop.png"
          alt="Turners Logo"
          className="logo"
        />
        <nav>
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main-content">
        <h1>Upload Your Car Image for AI Recognition</h1>

        <form onSubmit={handleSubmit} className="upload-form">
          <div
            className={`drop-zone ${selectedFile ? "with-preview" : ""}`}
            ref={dropRef}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            {previewUrl ? (
              <div className="image-preview-container">
                <img
                  src={previewUrl}
                  alt="Uploaded preview"
                  className="image-preview"
                />
                <label htmlFor="fileInput" className="replace-btn">
                  Replace Image
                </label>
              </div>
            ) : (
              <p>
                Drag & drop an image here,
                <br />
                or click{" "}
                <label htmlFor="fileInput" className="clickable-text">
                  here
                </label>{" "}
                to upload
              </p>
            )}
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input-hidden"
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Analyzing..." : "Analyze Image"}
          </button>
        </form>

        {loading && (
          <div
            className="spinner"
            role="status"
            aria-live="polite"
            aria-label="Loading"
          >
            <div className="loader"></div>
          </div>
        )}

        {result && !loading && (
          <div className="result-card fade-in">
            <h2>Prediction Results</h2>
            <div className="result-details">
              <div className="result-item">
                <Car className="result-icon" />
                <span>
                  <strong>Car Type:</strong> {result.prediction}
                </span>
              </div>
              <div className="result-item">
                <GaugeCircle className="result-icon" />
                <span>
                  <strong>Confidence:</strong> {result.confidence}%
                </span>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>Contact Turners: support@turners.co.nz | +64 9 123 4567</p>
        <div className="social-links">
          <a
            href="http://www.facebook.com/turnersNZ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>{" "}
          |
          <a
            href="https://www.instagram.com/turners_cars"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
