const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require("body-parser");
const User = require('./models/user');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/tester", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => {
    console.log("Mongoose Is Connected");
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  }

// Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({
    origin: "http://localhost:3000", // <----- the location of the react app were connecting to
    credentials: true
}));

app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}));


app.use(cookieParser("secretcode"))
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);

app.use(express.static(path.join(__dirname, "client", "build")));


//--------------------------------------------------------------------------------------




// Routes

app.post("/login", (req, res, next) => {
   passport.authenticate("local", (err,user,info) => {
       if (err) throw err;
       if (!user) res.send("No User Exists");
       else {
           req.logIn(user, err => {
               if (err) throw err;
               res.json(req.user);
               console.log(req.user);
           })
       }
   })(req, res, next);
});

app.post("/register", (req, res) => {
    User.findOne({username: req.body.username}, async(err,doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
            });
            await newUser.save();
            res.send("User Succsessfully Created");
        }
    })
});

app.get("/user", (req, res) => {
    if (req.user) {
        res.json(req.user);
    } else {
        res.json(null);
    }
});

app.put("/user/event", (req,res) => {
    console.log(req.user);
    User.findByIdAndUpdate(req.user._id , {$push: {"events": req.body}} , {new: true} , (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    })
});



// Start Server

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


app.listen(port, () => {
    console.log('Server Has Started')
})

