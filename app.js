const express = require("express");
require('dotenv').config();
const app = express();
const cors = require("cors");

app.use(cors());
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

const userdetails = require("./server/routes/userdetails.js");
const transaction = require("./server/routes/transactions.js");
const employeedetail = require("./server/routes/empolyeedetails.js");
const newprojectdetail = require("./server/routes/newprojects.js");
const empPerformance = require("./server/routes/performance.js");
const occations = require("./server/routes/occation.js");
const leads = require("./server/routes/leads.js");
const groups = require("./server/routes/groups.js");
const newBooking = require("./server/routes/newbooking.js");
const subtask = require("./server/routes/subtask.js");
const terms = require("./server/routes/privacypolicy.js");
const package = require("./server/routes/package.js");


app.use("/userdata", userdetails);
app.use("/transaction", transaction);
app.use("/employee", employeedetail);
app.use("/newproject", newprojectdetail);
app.use("/performance", empPerformance);
app.use("/occations", occations);
app.use("/leads", leads);
app.use("/group", groups);
app.use("/newbooking", newBooking);
app.use("/subtask", subtask);
app.use("/terms", terms);
app.use("/package", package);


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/", (req, res)=>{
    res.send("hello world");
});

app.listen(port, () => 
console.log(`server is running on ${port}`)
);

