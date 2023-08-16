import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: String, required: true },
    propertyType: { type: String, required: true },
    location: { type: String, required: true },
    dropLocation: { type: String, required: true },
    currency: { type: String, required: true },
    price: { type: String, required: true },
    time: { type: String, required: true },
    min: { type: String, required: true },
    number: { type: Number, required: true },
    photo: { type: String, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const propertyModel = mongoose.model("Property", PropertySchema);

export default propertyModel;