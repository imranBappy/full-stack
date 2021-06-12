const Transaction = require("../models/Transaction");

exports.transactionPortController = async (req, res, next) =>{
    try {
        const transaction = new Transaction(req.body)
        await transaction.save()
        res.json({message: 'Deposited successfully'})
    } catch (error) {
        next(error)
    }
};

exports.depositGetController =  async (req, res, next) =>{
    const {method, page} = req.query;
    const pageNumber =  page || 0 ;
    try {
        const deposit = Transaction.find({method}).skip(5 * Number(pageNumber)).limit(5).select({
            __v:0
        })
        res.json({
            data: deposit
        })
    } catch (error) {
        next(error)
    }
}