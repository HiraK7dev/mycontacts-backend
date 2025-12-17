import { model, Schema } from "mongoose";

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please add name"]
    },
    email: {
        type: String,
        required: [true, "Please add email"]
    },
    phoneNumber: {
        type: String,
        unique: [true, "Phone number must be unique"],
        required: [true, "Please add phoneNumber"]
    }
});

export const contactModel = model("Contact", contactSchema);