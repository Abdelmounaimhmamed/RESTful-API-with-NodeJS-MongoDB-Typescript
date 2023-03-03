import express from "express";
import Connection from "./DB/connection.db";
import config from "./config/config";
import routesAUthor from "./routes/Author.route";
const router = express();

/* setup the middlewares*/
router.use(express.urlencoded({extended : true}));
router.use(express.json());


/*Routes */
router.use("/author",routesAUthor);


/* start the server : */
const startServer = async () => {
    router.listen(config.SERVER_PORT , async () => {
        console.log(`App runing on Port ${config.SERVER_PORT}`);
        await Connection();
    })  
}

startServer();



