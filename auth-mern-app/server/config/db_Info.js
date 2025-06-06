import mongoose from "mongoose";

const connectDB = async () => {
    const mongo_url = process.env.MONGO_STRING;
    try {
        await mongoose.connect(mongo_url)
            .then(() =>
                console.log("DB is connected"))
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
    }
}

export default connectDB;


