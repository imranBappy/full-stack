const {Schema, model} = require('mongoose')

const rateSchema = new Schema({
    sponsor:Number
}, { timestamps: true } )

const Rate = model('rate', rateSchema)
module.exports = Rate;