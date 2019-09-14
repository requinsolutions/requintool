const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require('path');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/userdocument");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});


const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  }
});
// Require the controllers WHICH WE DID NOT CREATE YET!!
const document_controller = require("../../controllers/user/documents");
const checkAuth = require("../../middleware/check-auth");
// a simple test url to check that all of our files are communicating correctly.
router.get("/test", document_controller.test);
// router.get('/', taskfiles_controller.taskfiles_view);
router.post("/", upload.single("image"), document_controller.document_create);
// router.get('/:id', taskfiles_controller.taskfiles_details);
// router.put('/:id', taskfiles_controller.taskfiles_update);
// router.delete('/:id', taskfiles_controller.taskfiles_delete);

module.exports = router;
