import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
import bookRoute from "./route/book.route.js";
import userRouts from "./route/user.route.js";

app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 3000;
const URI = process.env.MongoDBURL;

// connect to mongoDB

mongoose
  .connect(URI, {})
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
