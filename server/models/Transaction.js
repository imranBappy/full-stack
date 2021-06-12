const { Schema, model } = require('mongoose')

const transactionSchema = new Schema({
    amount:{
        type: Number,
        required: true
    },
    number:{
        type: String,
        required: true
    },
    type:{
        type: String,
        enum:['personal', 'agent'],
        required: true
    },
    method:{
        type: String,
        required: true,
        enum:['bkash', 'rocket', 'nagad']
    },
    transaction:{
        type: String,
        required: true,
        enum:['deposit', 'withdraw']
    }
},{timestamps: true})

const Transaction = model('tranaction', transactionSchema);

module.exports = Transaction;
