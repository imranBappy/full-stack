const {Schema, model} = require('mongoose');
const userBetSchema = new Schema({
    amount:{
        type: Number,
        required: true
    },
    game:{
        type: Schema.Types.ObjectId,
        ref:'game',
        required: true
    },
    result:{
        type: Schema.Types.ObjectId,
        ref:'result',
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:'user',
        required: true
    }

},{timestamps: true})

const UserBet = model('bet', userBetSchema);
module.exports = UserBet;

