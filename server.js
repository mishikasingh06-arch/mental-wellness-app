require('dotenv').config();
console.log("DEBUG URI =", process.env.MONGO_URI);
const express = require('express');
const mongoose = require('mongoose');

console.log("Loaded URI:", process.env.MONGO_URI); // Debug check

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ Mongo Connection Error:", err));

app.get("/", (req, res) => {
  res.send("Server Working");
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
