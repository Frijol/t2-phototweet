var statusMessage = 'Tweeting from my #tessel camera! Make one yourself at https://github.com/Frijol/t2-phototweet';

// Set up the camera
var av = require('tessel-av');
var camera = new av.Camera();

// Set up Twitter
var twitter = require('twit');
// These are the public "secret" keys of the TesselTweet account. They are public online.
var twit = new twitter({
  consumer_key: 'O7oc0pvsZn4xjgcuHuYdX4FaC',
  consumer_secret: 'iJYuHFz2sD46Nvk3mcwzX8uih14aEAMgVWdWoR59nx8v6Zl7ZX',
  access_token: '2529232909-luARGU89K4CKFMvfzBjCgG6ubefzDkdDWkSB85i',
  access_token_secret: 'GXQfuzvGdjLEs3t1HEYfhQ9x9bdBcSBVXjBkbRgwYlOE0'
});

// Take a picture
var capture = camera.capture();
capture.on('data', function(data) {
  // Make post request on media endpoint. Pass file data as media parameter
  twit.post('media/upload', {media_data: data.toString('base64')}, function(error, media, response) {
    if (error) {
      console.log(error);
    } else {
      // If successful, a media object (var "media") will be returned.
      // Let's tweet it
      var status = {
        status: statusMessage,
        media_ids: media.media_id_string // Pass the media id string
      };

      twit.post('statuses/update', status, function(error, tweet, response) {
        if (!error) {
          console.log(tweet);
        }
      });
    }
  });
});
