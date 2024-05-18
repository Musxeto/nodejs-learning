import mongoose from "mongoose";

const productSchema = new mongoose.Schema({}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);
