const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var paymentSchema = new Schema(
  {
    _id: {
      ref: "Task",
      required: true,
      type: Schema.Types.ObjectId
    },
    budget: {
      type: Number,
    },
    amount_paid:{
        type: Number
    },
    currency:{
        type: String,
      enum: [
        "AUD",
        "INR"
      ],
      default: "AUD"
    }
  },
  {
    timestamps: true
  }
);
// Export the modelname
module.exports = mongoose.model("Payment", paymentSchema);
