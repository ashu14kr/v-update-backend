const express = require("express");
const multer  = require('multer')
const router = express.Router();
const UserdetailsController = require("../controller/userdetails");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix+file.originalname);
    }
  });
  
  const upload = multer({storage: storage})

router.post("/postUserDetails/", upload.fields([{ name: 'img', maxCount: 1 }, { name: 'pan', maxCount: 1 }, { name: 'adhr', maxCount: 1 }, { name: 'gst', maxCount: 1 }]) ,UserdetailsController.postUserData);
router.get("/getUserDetails/", UserdetailsController.getUserData);
router.get("/getUserDetailsById/", UserdetailsController.getUserDatabyId);

module.exports = router;