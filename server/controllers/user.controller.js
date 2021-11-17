const User = require("../models/user.model");
module.exports = {
    find: (req,res) => {
        User.find({})
            .then(users=>res.json(users))
            .catch(err=>res.status(400).json(err))
    },
    findOne: (req,res) => {
        User.findById(req.params.id)
            .then(user=>res.json(user))
            .catch(err=>res.status(400).json(err))
    },
    create: (req,res) => {
        User.create(req.body)
            .then(user=>res.json(user))
            .catch(err=>res.status(400).json(err))
    },
    deleteOne: (req,res) => {
        User.findByIdAndDelete(req.params.id)
            .then(user=>res.json(user))
            .catch(err=>res.status(400).json(err))
    },
    updateOne: (req,res) => {
        User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidator:true})
            .then(user=>res.json(user))
            .catch(err=>res.status(400).json(err))
    }
};