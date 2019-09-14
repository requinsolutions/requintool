const Document = require("../../models/user/document");

//Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send("Greetings from the task controller!");
};

exports.document_create = function(req, res) {
  let document = new Document({
    files: req.file.path,
    userId: req.body.userId,
    filedescription: req.body.filedescription,
    uploadpath: req.file.path
  });
  document.save(function(err, data) {
    if (err) {
      if (err.name === "MongoError" && err.code === 11000) {
        return next(new Error(err));
      } else {
        return next(err);
      }
    }
    res.send(data);
  });
};
