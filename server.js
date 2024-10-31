import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import { usersRouter, tasksRouter } from "./routes/index.js";
config();

const app = express();
app.use(express.json());
app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);
const port = process.env.PORT || 3001;
const db_url = process.env.DB_URI;
app.listen(port, async () => {
    try {
        await mongoose.connect(db_url);
        console.log("Connecting to DB");
        console.log(`Project is running on port: ${port}`);
    } catch (error) {
        console.log(error);
    }
});
