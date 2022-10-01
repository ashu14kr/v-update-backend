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

router.post("/postUserDetails/", upload.array('docs', 4) ,UserdetailsController.postUserData);

module.exports = router;