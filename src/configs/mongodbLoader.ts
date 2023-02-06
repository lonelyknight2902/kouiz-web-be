import mongoose from "mongoose";

const url = process.env.MONGODB_URI as string

mongoose.set('strictQuery', false);

export default async () => {
  try {
    await mongoose.connect(url)
    console.log('⚡️[DBS]: Mongdb connected...')
  } catch (error) {
    console.log(error)
  }
}