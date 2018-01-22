const dotenv = require('dotenv').config();
if(dotenv.err){
	throw dotenv.err;
}

const env = dotenv.parsed
const fs = require('fs');
const request = require('request');

const spotify = require('node-spotify-api');
const spotify = new Spotify({
	id: env.SPOTIFY_ID,
	secret: env.SPOTIFY_SECRET,
});
const Twitter = require('twitter');
const client = new Twitter({
  consumer_key: env.TWITTER_CONSUMER_KEY,
  consumer_secret: env.TWITTER_CONSUMER_SECRET,
  access_token_key: env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: env.TWITTER_ACCESS_TOKEN_SECRET
})

const program = process.argv[2];
const command = process.argv[3];

//switch statement

switch (program) {
 case 'movie-this':
   searchOmdb(command);
   break;
 case 'spotify-this-song':
   spotifySearch(command);
   break;
 case 'my-tweets':
   getTweets();
   break;
 case 'do-what-it-says':
   doIt();
   break;
}

function searchOmdb(command) {
	let url = ""
}

