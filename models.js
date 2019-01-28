const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/Dojo_Pizza');

const PizzaSchema = new mongoose.Schema({
        crust_type: {type: String, required: [true, "You must pick a crust"], minlength: [3, "Quote's must have at least 4 characters."]},
        size: {type: Number, default: 12 },      
        sauce: {type: String, required: [true, "Must pick a sauce"]},
        toppings:{type: [String]},
        special_request:{type:String}


        }, {timestamps: true});
    
PizzaTable = mongoose.model('Pizza', PizzaSchema);

const UserSchema = new mongoose.Schema({
        name: {type: String, required: [true, "First name is required"], minlength: [3, "First Name must have at least 4 characters."]},
        Type: {type: String, required: [true, "Last Name is required"], minlength: [3, "Last Name must have at least 4 characters."]},
        email: {type: String, required: [true, "Email is required"], Email: [3, "Description must have at least 4 characters."]},
        //Add google api if there is enough time at the end
        address: {type: String, required: [true, "First name is required"]},
        password: {type: String, required: [true, "First name is required"]},
        _pizza: [PizzaSchema]
        }, {timestamps: true});

User = mongoose.model('Users', UserSchema);


module.exports = User;
