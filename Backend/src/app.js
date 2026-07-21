const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Traiger Backend API Running",
    version: "1.0.0",
  });
});

const authRoutes = require("./routes/auth.routes");

app.use("/api/auth", authRoutes);
const userRoutes = require("./routes/user.routes");

app.use("/api/users", userRoutes);

module.exports = app;