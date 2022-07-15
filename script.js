let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let options = {day: 'numeric', weekday: 'long', month: 'long', year: 'numeric'};

const express = require("express");
const bodyParse = require("body-parser");
const ejs = require('ejs');

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParse.urlencoded({extended:true}));

const items = ["buy mouse", "buy Keyboard"];
let worke_items = [];
let today = new Date();

app.get("/", function(req, res){

	day = today.toLocaleDateString("en-US", options);
	res.render("list", {day:day, newItems:items, a:"list"});
});

app.post('/', function(req, res){
	if(req.body.to === "work")
	{
		worke_items.push(req.body.toDo);
		res.redirect('/work');
	}
	else
		items.push(req.body.toDo);
	res.redirect('/');
});

app.get('/work', function(req, res){
	res.render("list", {day:"work", newItems:worke_items, a:"work"});	
});

app.listen(3000, function(){
	console.log("Server start on Port 3000");
})