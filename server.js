const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 8000;

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);
app.use("/v1/api/users", require("./routes/userRoutes"));

// Routes
app.get("/v1/api/users", (req, res) => {
  res.status(200).json({ message: "Welcome to the Support Desk API" });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
