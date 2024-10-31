export async function getAllTasks(req, res, next) {
    try {
        res.status(200).send({
            status: "Success",
        });
    } catch (error) {
        next(error);
    }
}
export async function getByIdTask(req, res, next) {
    try {
        res.status(200).send({
            status: "Success",
        });
    } catch (error) {
        next(error);
    }
}
export async function createTask(req, res, next) {
    try {
        res.status(200).send({
            status: "Success",
        });
    } catch (error) {
        next(error);
    }
}
export async function updateTaskById(req, res, next) {
    try {
        res.status(200).send({
            status: "Success",
        });
    } catch (error) {
        next(error);
    }
}
export async function deleteTaskById(req, res, next) {
    try {
        res.status(200).send({
            status: "Success",
        });
    } catch (error) {
        next(error);
    }
}
