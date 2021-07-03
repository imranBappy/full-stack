const { Schema, model } = require('mongoose')

const transactionSchema = new Schema({
    amount:{
        type: Number,
        required: true
    },
    type:{
        type: String,
        enum:['personal', 'agent'],
    },
    number:{
        type: String,
        required: true
    },
    method:{
        type: String,
        required: true,
        enum:['bkash', 'rocket', 'nagad']
    },
    trxId: String,
    transaction:{
        type: String,
        required: true,
        enum:['deposit', 'withdraw']
    },
    accepted:{
        type: Boolean,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:'user'
    }
},{timestamps: true})

const Transaction = model('transaction', transactionSchema);

module.exports = Transaction;
