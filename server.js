var Firebase = require('firebase');
var Slack = require('slack-node');

var config = require('./config');

var firebaseRef = new Firebase(config.firebaseUrl);
var slack = new Slack(config.slackToken);
var channelName = config.channelName;

firebaseRef.on('child_added', function(snapshot){

  var key = snapshot.key();
  var val = snapshot.val();
  var message = config.firebaseUrl + " Child Added: " + key + ' ' + val;

  slack.api('chat.postMessage', {
    text:message,
    channel:channelName
  }, function(err, response){
    console.log(response);
  });
});
