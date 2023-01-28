const express = require("express");
const multer  = require('multer');
const router = express.Router();
const newBookingsController = require("../controller/newbooking");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix+file.originalname);
    }
  });
  
  const upload = multer({storage: storage});


  router.post("/postnewBooking/", upload.fields([{name: 'doc', maxCount: 1}]), newBookingsController.postNewBooking);
  router.get("/getnewBooking/", newBookingsController.getNewBookings);
  router.patch("/updatebooking/", newBookingsController.updateBookingInfo);
//   router.get("/getnewprojectsByStatus/", newProjectsController.getNewProjectsByStatus);
  
  module.exports = router;