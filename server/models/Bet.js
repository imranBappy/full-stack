const {Schema, model} = require('mongoose');

const betSchema = new Schema({
    title:{
        type: String,
        trim: true,
        required: true
    },
    game:{
        type: Schema.Types.ObjectId,
        ref:'game'
    }
},{timestamps: true})

const Bet = model('bet', betSchema);
module.exports = Bet;
