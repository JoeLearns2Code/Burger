//Import ORM
var orm = require("../config/orm.js");

//Object containing methods from orm.js
var burger = {

    //selectAll();
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    //insertOne();
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    //updateOne();
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

//Export functions
module.exports = burger;