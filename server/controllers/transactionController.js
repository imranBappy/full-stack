const Transaction = require("../models/Transaction");
const User = require("../models/User");
exports.transactionPortController = async (req, res, next) =>{
    try {
        const transaction = new Transaction(req.body);
        await transaction.save()
        res.json({message: 'Deposit Request successfully'})
    } catch (error) {
        next(error)
    }
};

exports.transactionGetController =  async (req, res, next) =>{
    const {transaction, page} = req.query;
    const pageNumber =  page || 0 ;
    try {
        const length = await Transaction.find({transaction}).count({})
        const deposit = await Transaction.find({transaction}).populate('user', 'username balance')
        .sort('-createdAt')
        .skip(5 * Number(pageNumber)).limit(5)
        .select({
            __v:0,
            updatedAt:0
        });
        res.json({
            transaction: deposit,
            length
        })
    } catch (error) {
        next(error)
    }
}

exports.transactionUpdateController = async (req, res, next) =>{
    try {
    const { trxId } = req.params;
    const { status ,userId,balance } = req.query;
        const updateTransaction = await Transaction.findByIdAndUpdate(trxId, {
            status: status
        },{new: true})
        .populate('user', 'username balance')
        .select({__v:0, updatedAt:0, });
        let updateBalance = 0;
        if (status === 'Accepted') {
            updateBalance = updateTransaction.amount + Number(balance)
        }else if(status === 'Rejected'){
            updateBalance = Number(balance)
        }
        await User.findByIdAndUpdate(userId, {
            balance: updateBalance
        });
        res.json({
            message: `Deposit successfully ${updateTransaction.status}`,
            error: false,
            transaction: updateTransaction
        });
    } catch (error) {
        next(error)
    }
}