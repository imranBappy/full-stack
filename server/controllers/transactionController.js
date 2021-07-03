const Transaction = require("../models/Transaction");
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
    console.log(req.query);
    const pageNumber =  page || 0 ;
    try {
        const deposit = await Transaction.find({transaction}).skip(5 * Number(pageNumber)).limit(5).select({
            __v:0
        })
        res.json({
            transaction: deposit
        })
    } catch (error) {
        next(error)
    }
}