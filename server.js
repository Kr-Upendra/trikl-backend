import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import mongoose from "mongoose";

const port = process.env.PORT || 3000;
const database = process.env.DATABASE;

mongoose
  .connect(database)
  .then(() => console.log("database connected!"))
  .catch((err) => console.log("mongo connection failed\n", err));

app.listen(port, () => {
  console.log(`server running at http://127.0.0.1:${port}`);
});
