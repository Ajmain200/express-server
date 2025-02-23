const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// mongodb connect
mongoose.connect("mongodb://localhost/authentication", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Authentication routes
const auth = require("./src/routes/auth.routes");
app.use(express.json());
app.use(cors());

app.use("/api/auth", auth);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello All Over the World");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
