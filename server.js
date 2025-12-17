import express from 'express';
import 'dotenv/config';
import errorHandler from './middleware/errorHandler.js';
import connectDb from './config/dbConnection.js';
import userRouter from './routes/userRoutes.js';
import contactRouter from './routes/contactRoutes.js';

connectDb();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", contactRouter);
app.use("/api/users", userRouter);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log("Server started successfully on port: " + PORT);
});
