import mongoose from "mongoose"

const orderIdSchema = new mongoose.Schema({
    orderId: { type: String, required: true },
    isResolved: { type: Boolean, default: false, required: true }
});

export const OrderId = mongoose.model("OrderId", orderIdSchema);