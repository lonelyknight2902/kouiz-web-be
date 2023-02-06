import mongoose from "mongoose";
const sampleSchema = new mongoose.Schema({
    x: String,
    y: Number
});
export default mongoose.model("Sample", sampleSchema);
