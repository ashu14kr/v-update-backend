const express = require("express");
const multer  = require('multer');
const router = express.Router();
const newProjectsController = require("../controller/newprojects");

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


  router.post("/postnewproject/", upload.fields([{name: 'doc', maxCount: 1}]), newProjectsController.postNewProjects);
  router.get("/getnewprojects/", newProjectsController.getNewProjects);
  router.get("/getnewprojectsByStatus/", newProjectsController.getNewProjectsByStatus);
  router.patch("/newProjectUpadte/", newProjectsController.updateProjectStatus);
  
  module.exports = router;