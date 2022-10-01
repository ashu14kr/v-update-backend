const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, { useNewURLParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connection success")
}).catch((err) => console.log(err));