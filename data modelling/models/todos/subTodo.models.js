import mongoose from "mongoose";
const subTodoSchema = new mongoose.Schema({}, { timestamps: true });

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
