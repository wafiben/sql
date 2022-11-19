const express = require("express");
const userRoute = require("./routes/UserRoute");
const connectDb=require('./connectDb/connectDb')
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
connectDb();
app.listen(port, (er) => {
  if (er) {
    console.log(err);
  } else {
    console.log(`server is running on port ${port}`);
  }
});
app.use(express.json())

app.use("/api", userRoute);

