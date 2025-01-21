import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
import bookRoute from "./route/book.route.js";

dotenv.config();
app.use(cors());

const port = process.env.PORT || 3000;
const URI = process.env.MongoDBURL;

// connect to mongoDB

mongoose
  .connect(URI, {})
  .then(() => console.log("Conected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error: ", err));

// defining Routes
app.use("/book", bookRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// mongodbcompas = mongodb://localhost:27017
// connection string = mongodb://localhost:27017
