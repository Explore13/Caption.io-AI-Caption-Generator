import React, { useRef, useState } from "react";
import axios from "axios";

const ImageUploader = ({
  image,
  setImage,
  setShowToast,
  showToastMessage,
  isLoading,
  setIsLoading,
}) => {
  const [file, setLocalFile] = useState(null);
  const fileInputRef = useRef();

  const handleAttachmentChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setLocalFile(selectedFile);
      setShowToast(false);
      setImage(null);
    }
  };

  const handleUpload = async () => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        setIsLoading(true);

        const response = await axios.post(
          "http://localhost:8000/api/v1/upload-image",
          formData
        );

        if (response.status === 200 && response.data) {
          setImage(response.data.image);
          setLocalFile(null);
          showToastMessage("Image uploaded successfully!", "success");
        }
      }
    } catch (error) {
      showToastMessage("Failed to upload the image.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      console.log(image);

      const response = await axios.delete(
        `http://localhost:8000/api/v1/delete-image`,
        {
          data: {
            fileName: `${image}`,
          },
        }
      );

      if (response.status === 200) {
        setImage(null);
        setLocalFile(null);
        
        showToastMessage("Image deleted successfully!", "success");
      }
    } catch (error) {
      showToastMessage("Failed to delete the image.", "error");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center w-full lg:w-1/2 space-y-6 border border-gray-300 p-6 rounded-lg shadow-md min-h-[800px] max-h-[200vh]">
      <h2 className="text-2xl font-semibold text-gray-700 pl-2 pb-2 border-b-2 w-full">
        Upload Image
      </h2>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleAttachmentChange}
        className="hidden"
      />

      <div className="flex gap-3">
        <button
          className="bg-blue-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-600 transition duration-300 focus:outline-none"
          onClick={() => fileInputRef.current.click()}
          disabled={isLoading}
        >
          {file ? "Change Image" : "Choose Image"}
        </button>

        {file && (
          <button
            className={`bg-green-500 text-white py-2 px-4 rounded-md shadow-md transition duration-300 focus:outline-none ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"
            }`}
            onClick={handleUpload}
            disabled={isLoading}
          >
            {isLoading ? "Uploading..." : "Upload Image"}
          </button>
        )}

        {image && (
          <button
            className={`bg-red-500 text-white py-2 px-4 rounded-md shadow-md transition duration-300 focus:outline-none ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-600"
            }`}
            onClick={handleDelete}
            disabled={isLoading}
          >
            Delete Image
          </button>
        )}
      </div>

      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="Preview"
          className="rounded-md shadow-md max-h-200 w-full max-w-xs"
          style={{ opacity: isLoading ? 0.5 : 1 }}
        />
      )}
      {image && (
        <img
          src={`http://localhost:8000/${image}`}
          alt="Uploaded Image"
          className="rounded-md shadow-md w-full max-w-xs"
          style={{ opacity: isLoading ? 0.5 : 1 }}
        />
      )}
    </div>
  );
};

export default ImageUploader;
