const {Schema, model} = require('mongoose');

const betSchema = new Schema({
    question:{
        type: String,
        trim: true,
        required: true
    }
},{timestamps: true})

const Bet = model('bet', betSchema);
module.exports = Bet;
