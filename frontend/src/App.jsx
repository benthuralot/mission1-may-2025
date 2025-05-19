import { useState } from "react";
import './App.css'

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleFileChange(e) {
    const file = e.target.files[0];
    setSelectedFile(file);
    setResult(null); // clear previous result on new upload
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!selectedFile) return alert("Please upload a car image.");

    setLoading(true);
    setResult(null);

    // Simulate async image recognition call
    setTimeout(() => {
      setLoading(false);
      setResult("Recognized: Sedan (sample result)");
    }, 2000);
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
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="file-input"
          />
          <button type="submit" disabled={loading}>
            {loading ? "Analyzing..." : "Analyze Image"}
          </button>
        </form>

        {loading && (
          <div className="spinner" role="status" aria-live="polite" aria-label="Loading">
            <div className="loader"></div>
          </div>
        )}

        {result && !loading && <div className="result">{result}</div>}
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
