const User = require('../models/User');
const UserBet = require('../models/UserBet')
exports.betPostController = async (req, res, next) =>{
    // console.log(req.body);
    try {
        const user = await User.findById(req.user);
        if (!(user.balance >= req.body.amount)) return res.json({
            message: 'There is not enough balance',
            error: true
        });
        const bet = new UserBet({...req.body, user: user._id, win: false})
        await bet.save();
        await User.findByIdAndUpdate(user._id,{
            balance: user.balance - Number(req.body.amount),
        });
        res.json({
            message: 'Bet send successfully!', error: false
        })
    } catch (error) {
        next()
    }
}