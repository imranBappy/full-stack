const Club = require("../models/Club")

exports.clubPortController = async (req, res, next) =>{
    try {
        const newClub =  new Club(req.body);
        await newClub.save();
        res.json({
            message: 'Club Created Successfully',
            error: false
        })
    } catch (error) {
        next(error)
    }
}
exports.clubGetController = async (req, res, next) =>{
    const page = req.prams.page || 0
    try {
        const club = await Club.find({}).skip(5* page).limit(5).select({
                password: 0,
                __v:0,
                createdAt:0,
                updatedAt:0
            })
        res.json({
            date: club
        })
    } catch (error) {
        next(error)
    }
}
