const express = require("express");
const multer  = require('multer');
const router = express.Router();
const empolyeeController = require("../controller/employeedetail");

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


router.post("/postemployeedata/", upload.fields([{name: 'img', maxCount: 1}, {name: 'adhr', maxCount: 1}]), empolyeeController.postEmployee);
router.get("/getemployeedata/", empolyeeController.getEmployeeData);
router.get("/getemployeedataById/", empolyeeController.getEmployeeDataById);
router.get("/getemployeeRefCount/", empolyeeController.getEmployeeRefData);
router.patch("/updatempdata/", empolyeeController.updateEmpData);

module.exports = router;

