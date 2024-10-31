import { users } from "../models/index.js";
export async function getAllUsers(req, res, next) {
    try {
        const usersData = await users.find({}, { password: 0 });
        if (!usersData) {
            return res.status(404).send("Data not found");
        }
        res.status(200).send({
            status: "Success",
            data: usersData,
        });
    } catch (error) {
        next(error);
    }
}
export async function getByIdUser(req, res, next) {
    try {
        const userId = req.params.userId;
        if (!userId) {
            return res.status(400).send("Error please try again");
        }
        const byIdUser = await users.findById(userId, { password: 0 });
        if (!byIdUser) {
            return res.status(404).send("Not found");
        }
        res.status(200).send({
            status: "Success",
            data: byIdUser,
        });
    } catch (error) {
        next(error);
    }
}
export async function createUser(req, res, next) {
    try {
        const { name, login, password } = req.body;
        if (!name || !login || !password) {
            return res.status(400).send({
                status: "Failed",
                message: "Values is not valid",
            });
        }
        const create = await users({
            ...req.body,
        });
        await create.save();
        res.status(200).send({
            status: "Successfully added",
            id: create._id,
        });
    } catch (error) {
        next(error);
    }
}
export async function updateUserById(req, res, next) {
    try {
        let updated = req.body;
        const data = await users.findById(req.params.userId);
        updated = {
            ...req.body,
        };
        const editUsers = await users.findByIdAndUpdate(
            req.params.userId,
            updated
        );
        res.status(200).send({
            status: "Updated",
            id: editUsers.__id,
        });
    } catch (error) {
        next(error);
    }
}
export async function deleteUserById(req, res, next) {
    try {
        const deletedData = await users.findByIdAndDelete(req.params.userId);
        res.status(200).send({
            status: "User Data Deleted Successfully",
            id: deletedData._id,
        });
    } catch (error) {
        next(error);
    }
}
