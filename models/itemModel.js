import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please provide a title!"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "please provide some description!"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
