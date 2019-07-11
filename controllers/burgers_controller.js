//Import express
var express = require("express");

var router = express.Router();

//Import burger.js
var burger = require("../models/burger.js");

//Routes

//selectAll()
router.get("/", function(req, res){
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        // return("Here is the motherf'n tea.")
        // res.render("index", hbsObject);
    });
});


//insertOne()
router.post("/api/burgers", function(req,res) {
    burger.updateOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        //Send ID of the new item
        res.json({id: result.insertId});
    });
});


//updateOne()

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//Export routes
module.exports = router;