var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}
var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    update: function (tableInput, condition, cb) {
        connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE ' + condition + ';', function (err, result) {
            if (err) throw err;
            cb(result);

        })
    },

    create: function(tableInput,val,cb){
        connection.query("INSERT INTO " + tableInput + " (burger_name) VALUES ('" + val + "');", function(err,result){
            if(err)throw err;
            cb(result);

        })
    }
};


module.exports = orm;