const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const requestSchema = mongoose.Schema({
  //   user: {
  //     type: mongoose.Schema.ObjectId,
  //     ref: "User",
  //     required: [true, "customer id is valid"],
  //   },
  name: { type: String, required: true },
  emailId: { type: String, required: true },
  address: { type: String, required: true },
  date: { type: Date, required: false },
  time: { type: String, required: true },
  garbageType: {
    type: String,
    required: true,
    enum: ["Organic", "Recyclable", "Hazardous"],
  },
});

requestSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Request", requestSchema);
