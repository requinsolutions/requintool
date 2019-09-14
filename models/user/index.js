const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var shortid = require("shortid-36");

var UserSchema = new Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      //validate: [validateEmail, 'Please fill a valid email address'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address"
      ]
    },
    phone: {
      type: Number,
      trim: true,
      unique: true,
    },
    user_type: {
      type: String,
      enum: ["Freelancer", "Employee", "Client"]
    },
    is_active: {
      type: Boolean,
      default: true
    },
    password: {
      type: String,
      required: true
    },
    freelancer: {
      isfulltime: {
        type: Boolean,
      },
      payperword: {
        type: Number,
      }
    },
    client: {
      country: {
        type: String,
      },
      university: String,
      isvendor: {
        type: Boolean,
      }
    },
    employee: {
      level: {
        type: String,
        enum: ["Admin", "Manager", "TeamLead","Expert"]
      },
      salary:{
        type:Number
      },
      joiningDate:{
        type:Date
      },
      endDate:{
        type:Date
      }
    }
  },
  {
    timestamps: true
  }
);

// Export the modelname
module.exports = mongoose.model("User", UserSchema);
