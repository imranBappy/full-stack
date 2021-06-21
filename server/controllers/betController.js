const Bet = require("../models/Bet")

exports.betPostController = async (req, res, next) =>{
    try {
        const bet = new Bet(req.body)
        const newBet = await bet.save()
        res.json({_id:newBet._id})

    } catch (error) {
        next(error)
    }
}