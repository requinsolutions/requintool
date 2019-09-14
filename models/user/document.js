const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var documentsSchema = new Schema(
  {
    files: {
      type: String
    },
    userId: {
      ref: "User",
      required: true,
      type: Schema.Types.ObjectId
    },
    filedescription: {
      type: String
    },
    uploadpath: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

// Export the modelname
module.exports = mongoose.model("Documents", documentsSchema);
