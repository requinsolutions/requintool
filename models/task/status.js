const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var statusSchema = new Schema(
  {
    _id: {
      ref: "Task",
      required: true,
      type: Schema.Types.ObjectId
    },
    status: {
      type: String,
      enum: [
        "Unassigned",
        "Assigned",
        "Completed",
        "Quality Check",
        "Delivered"
      ],
      default: "Unassigned"
    }
  },
  {
    timestamps: true
  }
);
// Export the modelname
module.exports = mongoose.model("Status", statusSchema);
