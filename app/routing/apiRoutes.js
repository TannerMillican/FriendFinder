var path = require("path");

var friendsData = require("../data/friends.js")

module.exports = function(app) {
    
    app.get('/api/friends', function(req, res){
        res.json(friendsData)
    });


    app.post('/api/friends', function(req, res){

        friendsData.push(req.body)

        var differencesArr = [];
        var compatableFriend

        for (var i = 0; i < friendsData.length - 1; i++){

            var possibleFriendsScoreArr = friendsData[i].scores;

            var userScoreArr = req.body.scores;

            var totalDifference = 0;

            var differences = possibleFriendsScoreArr.map(function(item, index){
                return Math.abs(item - userScoreArr[index])
            })
            for (var j = 0; j < differences.length; j++){
                totalDifference += differences[j]
            }
            differencesArr.push(totalDifference)
        }

        var minDifference = Math.min(...differencesArr)

        var differenceIndex;

        for (var i = 0; i < differencesArr.length; i++){
            if (minDifference === differencesArr[i]){
                differenceIndex = differencesArr.indexOf(minDifference)
            }
        }

        for (var i = 0; i < friendsData.length; i++){

            var friendIndex = friendsData[differenceIndex];
            
            compatableFriend = friendIndex

        }
        console.log(compatableFriend)
        res.json(compatableFriend)

    });

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}