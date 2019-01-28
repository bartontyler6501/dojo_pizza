const User = require('./models.js');

module.exports = {
    newUser: (req, res) => {
        User.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    allUsers: (req, res) => {
        User.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    viewUser: (req, res) => {
        User.findById({_id: req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    editUser: (req, res) => {
        User.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, {runValidators: true})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    deleteUser: (req, res) => {
        User.deleteOne({_id: req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    newPizza: (req, res) => {
        User.findByIdAndUpdate({_id: req.params.id}, {$push: {_pizza: [req.body]}}, {runValidators: true})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    allPizzas: (req, res) => {
        User.findById({_id: req.params.id})
        .then(data => res.json(data._pizza))
        .catch(err => res.json(err))
    },
    viewPizza: (req, res) => {
        User.findOne({_id: req.params.userId})
        .then(data => {
            var hasFound = false;
            for(var i = 0; i < data._pizza.length; i++) {
                if(data._pizza[i]._id == req.params.pizzaId) {
                    res.json(data._pizza[i]);
                    hasFound = true;
                }
            }
            if(!hasFound) {
                res.json({});
            }
        })
        .catch(err => res.json(err))
        // User.findById({_id: req.params.userId, "_pizza._id": req.params.pizzaId})
        // .then(data => res.json(data))
        // .catch(err => res.json(err))
    }
    // ,
    // deletePizza: (req, res) => {
    //     User.findByIdAndUpdate({_id: req.params.userId}, {$pull: {_pizza: req.params.pizzaId}})
    //     .then(data => res.json(data))
    //     .catch(err => res.json(err))
    // }
}