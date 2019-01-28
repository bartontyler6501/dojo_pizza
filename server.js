var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');


var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';



app.use(express.static(path.join(__dirname, './static')));




app.get('/', function(req, res) {
   res.render('index');  
})
// login success get route
app.get("/success", function(req, res){
    if(req.session.user_id) {
        User.findOne({_id: req.session.user_id}, function(err, user){
            if(err) {
                res.redirect("/");
            }
            else {
                res.render("success", {user: user});
            }
        });
    }
    else {
        res.redirect("/");
    }
});

// Register post route
app.post('/register', function(req, res) {
    console.log("POST DATA", req.body);
    var user = new User();
    console.log(user);
    user.first_name= req.body.first_name
    user.last_name = req.body.last_name
    user.birthday = req.body.birthday
    user.email = req.body.email
    bcrypt.hash(req.body.password, 10, function(err, hash){
        if(err) {
            res.redirect("/");
        }
        else {
            user.password = hash;
            user.save(function(err){
                if(err) {
                    res.redirect("/");
                }
                else {
                    req.session.user_id = user._id;
                    res.redirect("/success");
                }
            });
        }
    });
});
 
  // login post route
app.post('/login', (req, res) => {
    console.log(" req.body: ", req.body);
        User.findOne({email: req.body.email}, function(err, user){
        if (err) {
            console.log("user doesnt exist");
            console.log("We have an error!", err);
            res.redirect("/");
        }
        else {
            if (user){
                console.log(user);
                bcrypt.compare(req.body.password, user.password, function(err, result){
                    if(result) {
                        req.session.user_id = user._id;
                        res.redirect("/success");
                    }
                    else {
                        res.redirect("/");
                    }
                })
            }
            else{
                console.log('hey, this user doesnt exist, pal!');
                res.redirect('/');
            }
    }
})
});

      
// Setting our Server to Listen on Port: 8000

app.listen(8000, function() {
    console.log("listening on port 8000");