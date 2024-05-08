import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "../backend/routes/authRoutes.js";
import messageRoutes from "../backend/routes/messageRoutes.js";
import userRoutes from "../backend/routes/userRoutes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads from res.body
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   // root route http://localhost:8000/
//   res.send("Hello World");
// })

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
