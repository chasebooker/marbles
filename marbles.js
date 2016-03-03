// Initiate collection of marbles in Mongo database
var Marbles = new Mongo.Collection("marbles");

if (Meteor.isClient) {
  Template.body.helpers({
    
    // The marbles helper returns a list of the marbles
    marbles: function() {
      // Find all the marbles in the database and return
      return Marbles.find();
      
    }
    
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


