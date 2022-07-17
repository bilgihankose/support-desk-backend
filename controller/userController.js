const asyncHandler = require("express-async-handler");

//@desc     :Register a new user
//@route    :/v1/api/users
//@access   :Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //Basic validation
  if (!name || !email || !password) {
    res.status(400); //400 for client side status code
    throw new Error("Please include all fields");
  }
  res.send("Register Route");
});

//@desc     :Login a user
//@route    :/v1/api/users/login
//@access   :Public
const loginUser = asyncHandler(async (req, res) => {
  res.send("Login Route");
});

module.exports = {
  registerUser,
  loginUser,
};
