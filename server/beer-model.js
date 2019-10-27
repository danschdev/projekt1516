const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const beerSchema = new Schema ({
    id: { type: Number, required: true, unique: true },
    name: String,
    untappd: Number
})

const beer = mongoose.model('Beer', beerSchema);
module.exports = Beer;