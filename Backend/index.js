import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

const app = express();
import bookRoute from "./route/book.route.js";
import userRouts from "./route/user.route.js";

app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 3000;
const URI = process.env.MongoDBURL;

// Serve static files from the frontend
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// connect to mongoDB

const mongoUrl = process.env.MONGO_URI;
mongoose
  .connect(mongoUrl, {})
  .then(() => console.log("Conected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error: ", err));

// defining endPoints Routes
app.use("/book", bookRoute);
app.use("/user", userRouts);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// mongodbcompas = mongodb://localhost:27017
// connection string = mongodb://localhost:27017
