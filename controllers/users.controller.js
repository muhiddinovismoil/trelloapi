export async function getAllUsers(req, res, next) {
    try {
        res.status(200).send({
            status: "Success",
        });
    } catch (error) {
        next(error);
    }
}
export async function getByIdUser(req, res, next) {
    try {
        res.status(200).send({
            status: "Success",
        });
    } catch (error) {
        next(error);
    }
}
export async function createUser(req, res, next) {
    try {
        res.status(200).send({
            status: "Success",
        });
    } catch (error) {
        next(error);
    }
}
export async function updateUserById(req, res, next) {
    try {
        res.status(200).send({
            status: "Success",
        });
    } catch (error) {
        next(error);
    }
}
export async function deleteUserById(req, res, next) {
    try {
        res.status(200).send({
            status: "Success",
        });
    } catch (error) {
        next(error);
    }
}
