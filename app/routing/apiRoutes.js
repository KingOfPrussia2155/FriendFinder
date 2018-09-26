var friends = require("/../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function(res, req){
        res.json(friends);
    });
}