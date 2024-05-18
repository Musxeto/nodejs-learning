import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({}, { timestamps: true });

export const Order = mongoose.model("Order", orderSchema);
