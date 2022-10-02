const express = require("express");
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const userdetails = require("./server/routes/userdetails.js");

app.use("/userdata", userdetails);

app.get("/", (req, res)=>{
    res.send("hello world");
});

app.listen(port, () => 
console.log(`server is loaded on ${port}`)
);

