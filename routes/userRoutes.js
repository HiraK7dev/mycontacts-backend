import { Router } from "express";

const userRouter = Router();

userRouter.post("/register", (req, res) => {
    res.status(200).json({message: "Hello from register"});
});

userRouter.post("/login", (req, res) => {
    res.status(200).json({message: "Hello from login"});
});

userRouter.get("/current", (req, res) => {
    res.status(200).json({message: "Hello from current"});
});

export default userRouter