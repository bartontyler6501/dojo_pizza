const User = require('./models.js');
module.exports = {
    index: function(req, res){
        Author.find({}, function(err,User){
            if(err){
                console.log(err);
            }
            res.json({message: "Yeah, All Authors", User:users});
        });
        console.log("Looking for Authors");
    }
}