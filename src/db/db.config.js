import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectionDB = async ()=>{
    try {
    
        const connectionInterface = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log("\n",`Mongo DB connection successful : ${connectionInterface.connection.host}`)
    
    } catch (error) {
        
        console.log("Error in connecting DB: " ,error);
        process.exit(1);
    }
}


export default connectionDB;