import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING as string)
        console.log("MongoDB Connected")
    } catch (err) {
        console.log("Error ",err)
        process.exit(1)
    }
}

export default connectDB