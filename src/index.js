import dotenv from "dotenv";
import app from "./app.js";
import connectionDB from "./db/db.config.js";

dotenv.config({ path: "./.env" });

const port = process.env.PORT || 3000;

connectionDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App running at port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection error", err);
  });
