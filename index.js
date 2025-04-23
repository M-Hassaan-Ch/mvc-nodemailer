require("dotenv").config();
const express = require("express");
const app = express();
const mailRoutes = require("./routes/mailRoutes");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// View engine setup
app.set("view engine", "ejs");
app.set("views", "views");

// Routes
app.use("/", mailRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
