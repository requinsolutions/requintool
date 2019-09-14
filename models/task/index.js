const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var shortid = require("shortid-36");

var taskSchema = new Schema(
  {
    _id: {
      type: String,
      default: shortid.generate
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    soft_deadline: {
      type: Date
    },
    hard_deadline: {
      type: Date
    },
    assignedTo: {
      type: String,
      enum: ["Freelancer", "Employee"]
    },
    assignee: {
      ref: "User",
      required: true,
      type: Schema.Types.ObjectId
    },
    client: {
      ref: "User",
      required: true,
      type: Schema.Types.ObjectId
    },
    wordcount: {
      type: Number
    },
    createdby: {
      ref: "User",
      required: true,
      type: Schema.Types.ObjectId
    }
  },
  {
    timestamps: true
  }
);

// Export the modelname
module.exports = mongoose.model("Task", taskSchema);
