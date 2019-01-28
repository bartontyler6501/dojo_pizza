
const mongoose = require('mongoose');
const control = require('./controller.js');
const path = require('path');

module.exports = function(app){
    
    app.get('/authors', control.index);
}