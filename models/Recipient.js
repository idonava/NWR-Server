const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipentSchema = new Schema({
email: String,
respnded: {type: boolean, default:false}
});

module.exports = recipentSchema;