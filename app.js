const express = require("express");
require('dotenv').config();
const app = express();

var port = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

const userdetails = require("./server/routes/userdetails.js");
const transaction = require("./server/routes/transactions.js");
const employeedetail = require("./server/routes/empolyeedetails.js");
const newprojectdetail = require("./server/routes/newprojects.js");
const empPerformance = require("./server/routes/performance.js");
const occations = require("./server/routes/occation.js");


app.use("/userdata", userdetails);
app.use("/transaction", transaction);
app.use("/employee", employeedetail);
app.use("/newproject", newprojectdetail);
app.use("/performance", empPerformance);
app.use("/occations", occations);

app.get("/", (req, res)=>{
    res.send("hello world");
});

app.listen(port, () => 
console.log(`server is running on ${port}`)
);

