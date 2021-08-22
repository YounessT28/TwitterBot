var Twit = require('twit')

var T = new Twit({
	consumer_key: "jxrwmIDYgrFPWPtr8gPyjlNmF",
	consumer_secret: "p6lO5XKlobTwOOkZcD35XbrbfaXrcO3JywtBsXjd0CRPvPfUuX",
	access_token: "2468306065-X0VUfPsTLe7SOBLMAy1cldX3yjV5SzWWXEIROWh",
	access_token_secret: "pRHHPvmxpU3CYL24I2DuqtKn3kWkofuuiRBDoIa3GHAIg"
});

var stream = T.stream('statuses/filter', { track: 'et ce ratio'})
 
stream.on('tweet', function (tweet) {
  console.log("Tweet de " + tweet.user.name + " repéré")
  
  T.post('statuses/update', { 
		status: "@" + tweet.user.screen_name +' il s\'agirait d\'arrêter avec cette phrase c plus drôle',
		in_reply_to_status_id: tweet.id_str
	}, function(err, data, response) {
	console.log("Réponse envoyé à " + tweet.user.name)
  })
})