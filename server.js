const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8000;

//Connect to DB
connectDB();

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/v1/api/users", require("./routes/userRoutes"));
app.use("/v1/api/tickets", require("./routes/ticketRoutes"));

// Routes
app.get("/v1/api/users", (req, res) => {
  res.status(200).json({ message: "Welcome to the Support Desk API" });
});

//For returning JSON error message
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
