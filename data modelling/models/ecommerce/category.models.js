import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({}, { timestamps: true });

export const Category = mongoose.model("Category", categorySchema);
