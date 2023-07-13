import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const form = mongoose.model("form", formSchema);
export default form;
