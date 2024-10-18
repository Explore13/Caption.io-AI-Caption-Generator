import express from "express";
import chatRoute from "./routes/chatRoute.js";
import env from "./config/env.js";
import cors from "cors";


const app = express();
const PORT = env.PORT || 8000;
// console.log(process.env);

app.use(cors())
app.use(express.json());
app.use(express.static("public"));
app.use("/api/v1", chatRoute);

const server = app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
