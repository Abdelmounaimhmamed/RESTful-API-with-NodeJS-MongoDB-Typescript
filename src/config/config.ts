import dotenv from "dotenv";
dotenv.config();


const Db_URI : string  = process.env.DB_URI || "";
const SERVER_PORT : Number =process.env.PORT ? Number(process.env.PORT) : 3000;


const config = {
    Db_URI,
    SERVER_PORT
}

export default config;