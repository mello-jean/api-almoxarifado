import mongoose, { Types } from 'mongoose';


const StockMovementSchema = new mongoose.Schema({
    productId: { type: Types.ObjectId, required: true, ref:'Product' },
    userId: { type: Types.ObjectId, required: true, ref:'User' },
    type: {
        type: String,
        enum: ['IN', 'OUT'],
        required: true,
        uppercase: true,
        trim: true
    },
    quantity: { type: Number, required: true, min: 1 }
}, { timestamps: true });

export default mongoose.model('StockMovement', StockMovementSchema);
