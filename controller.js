const User = require('./models.js');

module.exports = {
    newUser: (req, res) => {
        Schemas.User.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    allUsers: (req, res) => {
        Schemas.User.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    viewUser: (req, res) => {
        Schemas.User.findById({_id: req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    editUser: (req, res) => {
        Schemas.User.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, {runValidators: true})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    deleteUser: (req, res) => {
        Schemas.User.deleteOne({_id: req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    newPizza: (req, res) => {
        Schemas.User.findByIdAndUpdate({_id: req.params.id}, {$push: {_pizza: [req.body]}}, {runValidators: true})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    allPizzas: (req, res) => {
        Schemas.User.findById({_id: req.params.id})
        .then(data => res.json(data._pizza))
        .catch(err => res.json(err))
    },
    viewPizza: (req, res) => {
        Schemas.User.findOne({_id: req.params.userId})
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
    },
    // deletePizza: (req, res) => {
    //     Schemas.User.findByIdAndUpdate({_id: req.params.userId}, {$pull: {_pizza: req.params.pizzaId}})
    //     .then(data => res.json(data))
    //     .catch(err => res.json(err))
    // },

    addMenuItem: (req, res) => {
        Schemas.Menu.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    viewMenu: (req, res) => {
        Schemas.Menu.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    viewMenuItem: (req, res) => {
        Schemas.Menu.findById({_id: req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    deleteMenuItem: (req, res) => {
        Schemas.Menu.deleteOne({_id: req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    }
}