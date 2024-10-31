import mongoose from "mongoose";
const tasksScheme = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
    },
    { versionKey: false }
);
export const tasks = mongoose.model("tasks", tasksScheme);
