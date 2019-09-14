const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var solutionfilesSchema = new Schema(
  {
    files: {
      type: String
    },
    taskid: {
      ref: "Task",
      required: true,
      type: Schema.Types.ObjectId
    uploadpath: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

// Export the modelname
module.exports = mongoose.model("solutionfiles", solutionfilesSchema);
