const express = require("express")
const dotenv = require('dotenv')
const mongoose = require("mongoose")
const app = express();

app.use(express.json())

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(require("./Route/register"))
app.use(require("./Route/login"))
app.use(require("./Route/profile"))


dotenv.config({ path: "./config.env" });

const DB_URL = process.env.DATABASE_URL;

// console.log(DB_URL)
mongoose.connect(DB_URL, {
    useNewURLParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
}).then(() => {

    console.log("MongoDB Connection Successful")
}).catch((err) => {
    console.log(err)
    console.log("MongoDB Connection Failed")
});


app.listen(5000, () => {
    console.log("The server is running at port 5000");
});