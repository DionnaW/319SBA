import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

//configuring this with my MongoDB Cloud
const mongoURI = process.env.MONGO_URI;
// console.log(mongoURI); this is just to check if my connection to mongoDB is active!
const db = mongoose.connection;

//setting up the connection to MongoDB Cloud
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
    console.log('mongo is connected');  //using this to show when it's connected vs crashed
});

export default db;