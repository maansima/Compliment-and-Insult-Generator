const express = require("express");
const path = require("path");

const compliments = [
    "You look nice today",
    "That dress looks nice on you",
    "Have you been working out?",
    "You can do hard things", 
    "You've gotten far in this course. You're really smart!", 
    "You're programming! How cool is that?", 
    "I'm really proud of you", 
    "You made this", 
    "You've learned a lot of things, and that's pretty hard to do"
]

const insults = [
    "You don't look nice today",
    "That dress does not look nice on you",
    "Do you even work out?",
    "You can't do hard things", 
    "You've gotten far in this course, and you're pretty much failing.", 
    "Are you really coder?", 
    "No one's proud of you.", 
    "Did you really make this?", 
    "You've learned a lot of easy things and you think they're hard."
]

function getRandomCompliment(){ 
    const randomIndex = Math.floor(Math.random() * compliments.length); 
    return compliments[randomIndex];
}

function getRandomInsult(){ 
    const randomIndex = Math.floor(Math.random() * insults.length); 
    return insults[randomIndex];
}


const app = express();

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "index.html"))
}); 

app.get("/insult", function(req, res){
    res
    .json({
        insult: getRandomInsult()
    })
    .end();
});


app.get("/compliment", function(req, res){
    res
    .json({
        compliment: getRandomCompliment()
    })
    .end();
});

app.use("/public", express.static("./public"));

var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
   console.log(`Listening on Port ${port}`);
}); 
console.log("listening on http://localhost:3000");
