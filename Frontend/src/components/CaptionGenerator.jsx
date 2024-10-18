import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const usageGuide = `**Usage Guide** \n\n\tCaption.io is a simple application to upload images and generate captions.\n ## Steps to Use:\n\b **Upload an Image**: Click on the "Choose Image" button to select an image from your device.\n\n\b **Generate Caption**: After uploading, type your desired caption prompt in the input field and click "Generate Caption"( You may just click the button without any prompt it will automatically generate the caption ).\n\n\b **View the Caption**: The generated caption will be displayed below the button.\n\n\b **Change Image**: You can change the image by clicking "Change Image".\n\n\b **Delete Image**: You can delete the image by clicking "Delete Image".\n\n\t\t\tEnjoy using Caption.io!`;

const CaptionGenerator = ({
  image,
  showToastMessage,
  isLoading,
  setIsLoading,
}) => {
  const [prompt, setPrompt] = useState("");
  const [message, setMessage] = useState("");

  const handleCaptionGeneration = async () => {
    try {
      if (!image) {
        showToastMessage("No image available to send.", "error");
        return;
      }

      setIsLoading(true);
      const response = await axios.post("http://localhost:8000/api/v1/chat", {
        file: `${image}`,
        prompt: prompt,
      });

      if (response.status === 200) {
        setMessage(response.data.message);
        showToastMessage("Message generated successfully!", "success");
      }
    } catch (error) {
      showToastMessage("Failed to generate.", "error");
    } finally {
      setPrompt("")
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full lg:w-1/2 space-y-6 border border-gray-300 p-6 rounded-lg shadow-md min-h-[800px] max-h-[200vh]">
      <h2 className="text-2xl font-semibold text-gray-700 pl-2 pb-2 border-b-2 w-full">
        Generate Caption
      </h2>
      <div className="flex w-full justify-center items-center lg:flex-row flex-col gap-2">
        <input
          type="text"
          placeholder="Type your prompt"
          className="w-full max-w-xs p-2 border rounded-md"
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          disabled={isLoading || !image}
        />
        <button
          className={`bg-purple-500 text-white py-2 px-6 rounded-md shadow-md transition duration-300 focus:outline-none cursor-pointer ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-600"
          }`}
          onClick={handleCaptionGeneration}
          disabled={isLoading || !image}
        >
          {isLoading ? "Generating..." : "Generate"}
        </button>
      </div>
      <div className="mt-6 bg-gray-100 p-4 rounded-md shadow-md w-full text-left h-50 overflow-y-auto">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          children={image && message ? message : usageGuide}
        />
      </div>
    </div>
  );
};

export default CaptionGenerator;
