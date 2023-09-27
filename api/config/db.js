import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URL) {
            throw new Error('MONGODB_URL environment variable is not defined.');
        }
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB Connected: ${mongoose.connection.host}`.blue.underline.bold);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`.red.bold);
    }
};
