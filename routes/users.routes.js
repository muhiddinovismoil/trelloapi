import { Router } from "express";
import {
    getAllUsers,
    getByIdUser,
    createUser,
    updateUserById,
    deleteUserById,
} from "../controllers/index.js";
export const usersRouter = Router();
usersRouter.get("/", getAllUsers);
usersRouter.get("/:userId", getByIdUser);
usersRouter.post("/", createUser);
usersRouter.put("/:userId", updateUserById);
usersRouter.delete("/:userId", deleteUserById);
