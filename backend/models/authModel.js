const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authSchema = new Schema({

})

const authModel = mongoose.model("User", authSchema);
module.exports = authModel;