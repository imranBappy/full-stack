const Game = require("../models/Game")

exports.gamePostController = async (req, res, next) =>{
    try {
        const game = new Game(req.body);
        const newGame = await game.save();
        res.json({
            message: 'Game successfully created!',
            data: newGame
        })
    } catch (error) {
        next(error)
    }
}
// query
exports.gameGetController = async (req, res, next) =>{
    const page = req.query.page || 0;
    try {
        const gameLength = await Game.find({})
        const game = await Game.find({}).skip(5 * Number(page)).limit(5);
        res.json({
            data: game,
            length: gameLength.length
        });
    } catch (error) {
        next(error)
    }
}

exports.gameAllDeleteController = async (req, res, next) =>{
    try {
        await Game.deleteMany({});
        res.json({
            message : 'Game deleted successfully!'
        })
        
    } catch (error) {
        next(error)
    }
}
