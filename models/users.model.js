import mongoose from "mongoose";
const usersScheme = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        login: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { versionKey: false }
);
export const users = mongoose.model("users", usersScheme);
