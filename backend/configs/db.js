import mongoose, { connect } from "mongoose";

 const connectToDB = async () => {
try {
    mongoose.connection.on('connected',()=>console.log("database connected"));
    await mongoose.connect(`${process.env.MONGODB_URI}/universalblog`);
} catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
}
}
export default connectToDB;