const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var expertTaskSchema = new Schema(
  {
    _id: {
      ref: "Task",
      required: true,
      type: Schema.Types.ObjectId
    },
    expert: {
      ref: "User",
      required: true,
      type: Schema.Types.ObjectId
    },
    expectedDeliveryDate: {
      type: Date
    },
    coins: {
      type: Number
    }
  },
  {
  }
);
// Export the modelname
module.exports = mongoose.model("ExpertTask", expertTaskSchema);
