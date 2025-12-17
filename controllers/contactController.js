import asyncHandler from "express-async-handler";
import { contactModel } from "../models/contactModel.js";

const getAllContacts = asyncHandler(async (req, res) => {
  const getAllContacts = await contactModel.find({});
  res.status(200).json({ message: "Fetch successful", data: getAllContacts });
});

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phoneNumber } = req?.body;
  if (!name || !email || !phoneNumber) {
    res.status(400);
    throw new Error("All fields are mandetory");
  }

  const createContact = await contactModel.create({
    name,
    email,
    phoneNumber,
  });
  res.status(200).json({ message: "Contact created", data: createContact });
});

const getContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const getContact = await contactModel.findById(id);
  if (!getContact) {
    res.status(404);
    console.log(contact);
    throw new Error("Contact not found");
  }
  res.status(200).json({ message: "Fetch successful", data: getContact });
});

const editContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await contactModel.findById(id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const editContact = await contactModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json({ message: "Edit successful", data: editContact });
});

const deleteContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await contactModel.findById(id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const deleteContact = await contactModel.findByIdAndDelete(id);
  res.status(200).json({ message: "Delete successful", data: deleteContact });
});

export {
  getAllContacts,
  createContact,
  getContact,
  editContact,
  deleteContact,
};
