const express = require("express");
require('dotenv').config();
const app = express();
const cors = require("cors");
const cron = require('node-cron');
http = require("http");
const accountSid = "ACc176680b7fb44f928ca9961dbcb7a569";
const authToken = "7ef16c6ca5d9cc2dd36e3c3692507613";
const client = require('twilio')(accountSid, authToken);

app.use(cors());
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
const currentTime = new Date();

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


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
  res.send("hello world");
});

cron.schedule('* * * * *', () => {
  console.log("Working");
  http.get("http://localhost:4000/occations/getAllOccations", (res) => {
  // console.log("statusCode:", res.statusCode);
  // console.log("headers:", res.headers);
  res.on("data", (chunk) => {
    const parsedData = JSON.parse(chunk);
    parsedData.forEach(function (element) {
      const date2 = new Date(Date.parse(element.date));
      if (date2.getTime() > currentTime.getTime()) {
        console.log("Future");
      } else if (date2.getTime() < currentTime.getTime()) {
        console.log("Past");
          client.messages
          .create({
            from: 'whatsapp:+14155238886',
            body: `${element.note}`,
            to: `whatsapp:+91${element.time}`
          }).then((messages) => {
            console.log(messages.messagingServiceSid);
            console.log("success");
            const req = http.request({
              hostname: 'localhost',
              port: 4000,
              path: `/occations/deleteOccation/?_id=${element._id}`,
              method: 'DELETE'
            }, (res) => {
              console.log(`statusCode: ${res.statusCode}`);
              res.on('data', (d) => {
                process.stdout.write(d);
              });
            });
            req.on('error', (error) => {
              console.error(error);
            });
            req.end();
          });
      }
    });
  });
});
});

app.listen(port, () =>
  console.log(`server is running on ${port}`)
);

