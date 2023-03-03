import mongoose  from "mongoose";
import dotenv from "dotenv";
import config from "../config/config";
dotenv.config();

const Connection  = () => {
    mongoose.connect(config.Db_URI).then( () => {
        console.log("Connection to database ! ");
    }).catch((err : any) => {
        console.log("Error connecting to database  : " , err);
        // process.exit(1);
    } )
}

export default Connection;