var mongoose = require("mongoose");
var Schema = mongoose.Schema;

(shippingSchema = new Schema({
 
  first_name: String,
  last_name: String,
  address: String,
  email: String,
  order_id: String,
  phone: Number,
  pin: Number,
  additional: String,
  order_status: String,
})),
  (shipping = mongoose.model("shipping", shippingSchema));

module.exports = shipping;