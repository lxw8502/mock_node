const express = require("express");
const fs = require('fs');
const path = require('path');
const { nextTick } = require("process");

const app = express();
app.use(express.static("static"));
app.set("view engine", "ejs");

// index page
app.get('/', function (req, res) {
    var mascots = [{
            name: 'Sammy',
            organization: "DigitalOcean",
            birth_year: 2012
        },
        {
            name: 'Tux',
            organization: "Linux",
            birth_year: 1996
        },
        {
            name: 'Moby Dock',
            organization: "Docker",
            birth_year: 2013
        }
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

// about page
app.get('/about', function (req, res) {
    res.render('pages/about');
});

app.get("/imgPage", (req, res) => {
    res.render("img");
});

app.get("/img", (req, res, next)=>{
    res.sendFile("./static/1.jpg", {root: path.join(__dirname)}, function(err){
        if(err){
            console.log(err);
            res.send("can't find image");
        }else{
            console.log("no error");
        }
    });
})


app.listen(4000);