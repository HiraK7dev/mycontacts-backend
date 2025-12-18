import { Router } from "express";
import {
  currentUser,
  loginUser,
  registerUser,
} from "../controllers/userController";

const userRouter = Router();

userRouter.route("/register").post(registerUser);

userRouter.route("/login").post(loginUser);

userRouter.route("/current").get(currentUser);

export default userRouter;
