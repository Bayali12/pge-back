import mongoose from 'mongoose';

export async function connectDB(connectionUri) {
  try {
    const conn = await mongoose.connect(connectionUri);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
