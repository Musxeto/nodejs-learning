import mongoose from "mongoose";
const subTodoSchema = new mongoose.Schema({});

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
