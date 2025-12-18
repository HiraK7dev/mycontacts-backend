import { model, Schema } from "mongoose";

const userSchema = new Schema({
    userName: {
        type: String,
        required: [true, "Username cannot be empty"],
    },
    email: {
        type: String,
        required: [true, "Email cannot be empty"],
        unique: [true, "Email must be unique"]
    },
    password: {
        type: String,
        required: [true, "Password cannot be empty"]
    }
}, {
    timestamps: true
});

export const userModel = model("User", userSchema);