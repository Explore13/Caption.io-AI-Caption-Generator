import { renameSync } from "fs";
import fs from "fs/promises";
import { geminiModel } from "../config/geminiAIModel.js";
export const generate = async (req, res) => {
  try {
    const { file, prompt } = req.body;
    console.log(file);

    const filePath = `./public/${file}`;
    const imageFile = await fs.readFile(filePath);
    const imageBase64 = imageFile.toString("base64");    

    const promptConfig = [
      {
        text: prompt || "Generate some captions for this image with different social media platforms",
      },
      {
        inlineData: {
          mimeType: "image/*",
          data: imageBase64,
        },
      },
    ];

    const result = await geminiModel.generateContent({
      contents: [{ role: "user", parts: promptConfig }],
    });
    const response = result.response;
    console.log(response.text());
    // res.send(`
    //   <div style="text-align: center;">
    //     <img src="http://localhost:8000/my_new_photo.jpg" height="500" width="500" alt="Generated Image"/>
    //     <h2>${response.text()}</h2>
    //   </div>
    // `);
    res.status(200).json({
      message: response.text(),
    });
  } catch (error) {
    console.log(" response error", error.message);
  }
};

export const uploadImage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).send("File is required.");

    const date = Date.now();
    let fileName = date + req.file.originalname;
    let folderName = "public/" + fileName;

    renameSync(req.file.path, folderName);

    return res.status(200).json({
      image: `${fileName}`,
    });
  } catch (error) {
    console.log(" response error", error.message);
  }
};

export const deleteImage = async (req, res) => {
  try {
    const { fileName } = req.body;
    console.log(fileName);
    
    if (!fileName) return res.status(400).send("File name is required.");

    const filePath = `./public/${fileName}`;
    await fs.unlink(filePath);

    return res.status(200).json({
      message: "Image deleted successfully.",
    });
  } catch (error) {
    console.log(" response error", error.message);
    return res.status(500).send("An error occurred while deleting the image.");
  }
};