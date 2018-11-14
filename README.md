Photo Tweeter
=============
Tweets photos from a webcam attached to a Tessel. One photo tweeted per time the script is run.

Example tweet: https://twitter.com/TesselTweet/status/753537667372085248

## Materials
* Tessel 2
* Webcam

## To use
1. Plug in USB webcam to Tessel 2 and plug in Tessel to your computer
1. Clone this repo and `npm install`
1. Make sure Tessel is connected to Wifi (`t2 wifi`)
1. `t2 run index.js` to run
1. Run the script again to take/tweet another photo

Ta-da! Check @TesselTweet's twitter for your tweeted photo.

## Future work
* Use Tessel's onboard LEDs to show when photo is being taken
* Create a web UI to a webserver hosted on the Tessel so anyone on LAN can trigger photos while script is running

PRs welcome!
