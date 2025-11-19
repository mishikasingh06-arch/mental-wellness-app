import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Replace this with your real MongoDB URL
const MONGO_URL = "your-mongodb-connection-url-here";

mongoose.connect(MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.log("❌ Error connecting MongoDB:", err));

app.get("/", (req, res) => {
  res.send("Server is running & MongoDB is connected!");
});

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
