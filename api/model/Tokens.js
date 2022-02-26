const mongoose = require("mongoose");

const tokensSchema = new mongoose.Schema({
  tokens: {
    type: Array,
  },
});

module.exports = mongoose.model("tokens", tokensSchema);
