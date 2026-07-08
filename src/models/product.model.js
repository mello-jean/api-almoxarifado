import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    categories: [
        { type: String, required: true, trim: true, lowercase: true }
    ],
    stock: { type: Number, required: true, default: 0, min: 0 },
}, { timestamps: true });

export default mongoose.model('Product', ProductSchema);
