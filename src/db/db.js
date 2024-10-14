import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log('mongoDB connected', connectionInstance.connection.host);
        // console.log('connectionInstance', connectionInstance);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectDB;