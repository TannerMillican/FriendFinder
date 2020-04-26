# FriendFinder

This is the Friend Finder app!

In this app, the user first lands on the homepage. This page has a button that takes the user to the survey, as well as a link that returns a json object of possible friends the user could be matched to and a link to the github repo for this app.

When the user clicks the survey button on the homepage, they are then routed to the html page containing the survey, thanks to routing handled in the htmlRoutes.js folder.

On this page, the user is present with two input fields, one being the user's name, and the other is for a link to the user's picture. Below these two inputs, there is a series of ten questions. Each question has a dropdown with 5 options labeled 1 through 5, respectively.

Once the user fills out the two inputs and answers all the questions, they then press the submit button. When this button is pressed, their inputs and answers are posted to the friends.js file as a new object. This new object's array of answer values is compared against those in each object already in the friends.js file, the difference of each is then put into an array. The lowest value in this array is then found, the index of which is then compared to the indices of each object in the friends.js file. Once a match is found, the object in friends.js is returned to the front end as a response to the ajax post.

Then, once a response is recieved from the server, a modal containing the string "Your suggested friend is" as its title and a string with the value of the name obtained from the response as well as an image as its body is then displayed.