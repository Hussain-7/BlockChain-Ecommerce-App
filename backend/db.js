const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin@devconnector.gbtpn.mongodb.net/BlockChainEcommerceApp?retryWrites=true&w=majority");

const paymentSchema = new mongoose.Schema({
  id: String,
  itemId: String,
  paid: Boolean,
});
const Payment = mongoose.model("Payment", paymentSchema);

module.exports = {
  Payment,
};
