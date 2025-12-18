import asyncHandler from "express-async-handler";

const registerUser = asyncHandler((req, res) => {
  res.status(200).json({ message: "Hello from register" });
});

const loginUser = asyncHandler((req, res) => {
  res.status(200).json({ message: "Hello from login" });
});

const currentUser = asyncHandler((req, res) => {
  res.status(200).json({ message: "Hello from current" });
});

export { registerUser, loginUser, currentUser };
