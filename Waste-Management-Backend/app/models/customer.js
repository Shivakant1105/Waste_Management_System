const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const customerSchema = mongoose.Schema({
  name: { type: String, required: true },
  emailId: { type: String, required: true, unique: true },
  password: { type: String, required: [true, "Enter correct Password"] },
  address: { type: String, required: false },
  location: { type: { lat: Number, lng: Number }, required: false },
  region: { type: String, required: false },
  cnic: { type: String, required: false },
  cellNo: { type: String, required: false },
});

customerSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", customerSchema);
