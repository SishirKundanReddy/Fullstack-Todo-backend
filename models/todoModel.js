import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
  list: {
    type: String,
    require: true,
  },
});
export default mongoose.model("todo", todoSchema);
