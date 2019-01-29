
const mongoose = require('mongoose');
const control = require('./controller.js');
const path = require('path');

module.exports = function(app){
    
    // Users
    app.post('/api/Users/', control.newUser);
    app.get('/api/Users', control.allUsers);
    app.post('/api/Users/login/:email', control.LoginUser);
    app.get('/api/Users/:id', control.viewUser);
    app.put('/api/Users/:id', control.editUser);
    app.delete('/api/Users/:id', control.deleteUser);

    // Pizzas Belonging to Users
    app.put('/api/Users/:id/pizzas', control.newPizza);
    app.get('/api/Users/:id/pizzas', control.allPizzas);
    app.get('/api/Users/:userId/pizzas/:pizzaId', control.viewPizza);
    // app.delete('/api/Users/:userId/pizzas/:pizzaId', control.deletePizza);
    // app.edit('/api/Users/:id/pizzas/:id', control.editPizza);

    // Pizza Menu
    app.post("/api/menu", control.addMenuItem);
    app.get("/api/menu", control.viewMenu);
    app.get("/api/menu/:id", control.viewMenuItem);
    app.delete("/api/menu/:id", control.deleteMenuItem);
    
}