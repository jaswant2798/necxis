"use client";
import { useState } from "react";
import axios from "axios";

export default function PhotoUploadForm() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setError("");

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Selected image exceeds the size limit of 5MB.");
      return;
    }

    const data = new FormData();
    data.set("file", file);

    axios
      .post("/api/upload", data)
      .then((response) => {
        const responseData = response.data;

        setImageUrl(responseData.imageUrl);
      })
      .catch((error) => {
        console.error(error);
        setError("Upload failed. Please try again.");
      });
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={onSubmit}>
        <label>
          <input type="file" name="file" onChange={handleFileChange} />
        </label>
        <input type="submit" value="Upload" />
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {previewUrl && (
        <div>
          <h2>Selected Image Preview</h2>
          <img
            src={previewUrl}
            alt="Selected"
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
        </div>
      )}
      {imageUrl && (
        <div>
          <h2>Uploaded Photo</h2>
          <img
            src={imageUrl}
            alt="Uploaded"
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
        </div>
      )}
    </div>
  );
}
