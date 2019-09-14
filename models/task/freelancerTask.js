const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var freelancerTaskSchema = new Schema(
  {
    _id: {
      ref: "Task",
      required: true,
      type: Schema.Types.ObjectId
    },
    freelancer: {
      ref: "User",
      required: true,
      type: Schema.Types.ObjectId
    },
    expectedDeliveryDate: {
      type: Date
    },
    compensation: {
      type: Number
    },
    paid_amount: {
      type: Number
    },
    paid_date: {
      type: Date
    }
  },
  {
  }
);
// Export the modelname
module.exports = mongoose.model("FreelancerTask", freelancerTaskSchema);
