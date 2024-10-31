import { tasks } from "../models/tasks.model.js";
export async function getAllTasks(req, res, next) {
    try {
        const task = await tasks.find();
        if (!task) {
            return res.status(404).send("Data Not Found");
        }
        res.status(200).send({
            status: "Success",
            data: task,
        });
    } catch (error) {
        next(error);
    }
}
export async function getByIdTask(req, res, next) {
    try {
        const id = req.params.taskId;
        const task = await tasks.findById(id);
        if (!task) {
            return res.status(404).send("Data Not Found");
        }
        res.status(200).send({
            status: "Success",
            data: task,
        });
    } catch (error) {
        next(error);
    }
}
export async function createTask(req, res, next) {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).send({
                status: "Failed",
                message: "Values is not valid",
            });
        }
        const addTask = await tasks({
            ...req.body,
        });
        await addTask.save();
        res.status(200).send({
            status: "Success",
            data: addTask._id,
        });
    } catch (error) {
        next(error);
    }
}
export async function updateTaskById(req, res, next) {
    try {
        const updatedTask = await tasks.findByIdAndUpdate(
            req.params.taskId,
            req.body
        );
        if (!updatedTask) {
            return res
                .status(404)
                .send({ status: "Data not updated and Not found" });
        }
        res.status(200).send({
            status: "Updated",
            data: updatedTask._id,
        });
    } catch (error) {
        next(error);
    }
}
export async function deleteTaskById(req, res, next) {
    try {
        const deleteTask = await tasks.findByIdAndDelete(req.params.taskId);
        if (!deleteTask) {
            return res.status(404).send({
                status: "Task not found or Already deleted before",
            });
        }
        res.status(200).send({
            status: "Success",
            data: deleteTask._id,
        });
    } catch (error) {
        next(error);
    }
}
