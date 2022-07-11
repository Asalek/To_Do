let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let options = {day: 'numeric', weekday: 'long', month: 'long', year: 'numeric'};

const express = require("express");
const bodyParse = require("body-parser");
const ejs = require('ejs');

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParse.urlencoded({extended:true}));

let items = ["buy mouse", "buy Keyboard"];

app.get("/", function(req, res){

	let today = new Date();
	day = today.toLocaleDateString("en-US", options);
	res.render("list", {day:day, newItems:items});
});

app.post('/', function(req, res){
	items.push(req.body.toDo);
	res.redirect('/');
});

app.listen(3000, function(){
	console.log("Server start on Port 3000");
})