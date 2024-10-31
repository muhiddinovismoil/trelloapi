import { Router } from "express";
import {
    getAllTasks,
    getByIdTask,
    createTask,
    updateTaskById,
    deleteTaskById,
} from "../controllers/index.js";
export const tasksRouter = Router();
tasksRouter.get("/", getAllTasks);
tasksRouter.get("/:taskId", getByIdTask);
tasksRouter.post("/", createTask);
tasksRouter.put("/:taskId", updateTaskById);
tasksRouter.delete("/:taskId", deleteTaskById);
