const {Schema, model} = require('mongoose');

const resultSchema = new Schema({
    ans:{
        type: String,
        trim: true,
        required: true
    },
    rate:{
        type: Number,
        required: true
    },
    game:{
        type: Schema.Types.ObjectId,
        ref:'game',
        required: true
    },
    bet:{
        type: Schema.Types.ObjectId,
        ref:'bet',
        required: true
    }
});

const Result = model('result', resultSchema);
module.exports = Result;