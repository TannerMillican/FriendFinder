var path = require("path");

var friendsData = require("../data/friends.js")

module.exports = function(app) {
    
    app.get('/api/friends', function(req, res){
        res.json(friendsData)
    });


    app.post('/api/friends', function(req, res){
        // console.log(req)
        // console.log(res)

        var differencesArr = [];
        var compatableFriend

        for (var i = 0; i < friendsData.length; i++){

            var possibleFriendsScoreArr = friendsData[i].scores;

            var userScoreArr = req.body.scores;

            var totalDifference = 0;

            var differences = possibleFriendsScoreArr.map(function(item, index){
                return item - userScoreArr[index]
            })
            for (var j = 0; j < differences.length; j++){
                totalDifference += differences[j]
            }
            differencesArr.push(totalDifference)
        }

        console.log(differencesArr)

        var minDifference = Math.min(...differencesArr)
        console.log(minDifference)

        var differenceIndex;

        for (var i = 0; i < differencesArr.length; i++){
            if (minDifference === differencesArr[i]){
                differenceIndex = differencesArr.indexOf(minDifference)
            }
        }


        // console.log(compatableFriend)

        for (var i = 0; i < friendsData.length; i++){

            var friendIndex = friendsData[differenceIndex];
            
            compatableFriend = friendIndex

        }
        res = compatableFriend
        console.log(res)
    });

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}