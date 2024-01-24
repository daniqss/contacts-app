import mongoose from 'mongoose'

export const contactSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.UUID,
        unique: true
    },
    name: String,
    birthday: Date,
    phone: Number,
    email: String
})
