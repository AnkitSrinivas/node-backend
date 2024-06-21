
import dotenv from "dotenv";

import connectionDB from "./db/db.config.js";

dotenv.config({path:'./.env'})


const port = process.env.PORT || 3000;



connectionDB();





