



"use client";

import { useState } from "react";
import Link from "next/link";

export default function VideoUploadPage() {
  const [videoFile, setVideoFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [loading, setLoading] = useState(false);

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setUploadedUrl("");
    }
  }

  async function handleUpload() {
    if (!videoFile) {
      alert("Please select a video first!");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("video", videoFile);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setUploadedUrl(data.url);
        alert("Upload successful!");    
      } else {
        alert(data.error || "Upload failed");
      }
    } catch (error) {
      alert("Error uploading: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: 20, textAlign: "center" }}>
      <h1>Upload Your Video</h1>

      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        style={{ marginTop: 20 }}
      />

      {previewUrl && (
        <div style={{ marginTop: 20 }}>
          <h3>Local Preview:</h3>
          <video
            src={previewUrl}
            controls
            width="600"
            style={{ border: "1px solid #ccc" }}
          />
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={loading}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          cursor: loading ? "not-allowed" : "pointer",
          backgroundColor: loading ? "#888" : "#0070f3",
          color: "white",
          border: "none",
          borderRadius: 5,
          fontSize: 16,
        }}
      >
        {loading ? "Uploading..." : "Upload Video"}
      </button>

      {uploadedUrl && (
        <div style={{ marginTop: 30 }}>
          <h3>Uploaded Video:</h3>
          <video
            src={uploadedUrl}
            controls
            width="600"
            style={{ border: "1px solid #ccc" }}
          />
          <p>Video URL: {uploadedUrl}</p>
        </div>
      )}

      <div style={{ marginTop: 40 }}>
        <Link href="/">
          <a style={{ color: "blue", textDecoration: "underline" }}>
            ← Back to Home
          </a>
        </Link>
      </div>
    </main>
  );
}
