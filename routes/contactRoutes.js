import { Router } from "express";
import {
  createContact,
  deleteContact,
  editContact,
  getAllContacts,
  getContact,
} from "../controllers/contactController.js";

const contactRouter = Router();

contactRouter.route("/").get(getAllContacts).post(createContact);

contactRouter.route("/:id").get(getContact).put(editContact).delete(deleteContact);

export default contactRouter;
