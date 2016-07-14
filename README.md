Photo Tweeter
=============
Tweets photos from a webcam attached to a Tessel. One photo tweeted per time the script is run.

Example tweet: https://twitter.com/TesselTweet/status/753537667372085248

## Materials
* Tessel 2
* Webcam

![setup](https://lh3.googleusercontent.com/mTgNPI-CoZhKjDbFcdSOUbvFNxA-e7AauFIP3TOH3r6zF4aInMEkI7RAiLSghDbMOru5y9FAM5oVArISIhmrcBnyoZ02FK4VkYQIOZ1dgymLnWL-nyvFWH9OgZay4UxIEaIkkjAv4m2wG3kDjW8iwm_vMWrajrWAdOGgLNKx602O53dAk3MFXPWryZokqn11sV_Efel7aLrs9bpLlUCyscTompwLjxCWQT_vmBwPgovcvzwLgB7RyBqfhEDkVZBAG3tomZRnNyVrF2EmmQHZ_sYA1ukUXRlvunyHPRUJk4mHBi9CRLGpwcn88OYNDgxV06_mwAwySJ7JqnMuW6IctF7y7eKH02AIGO85kuj6Iofh54d12zTv9L6UL0EptwsArVhIjb-bgIfMdjRXamw_y-sbhXRN8_7tOZmsUcdy0gPKuIOy1OXMjTvPb1PsKwywqrUlOR52hsu_3csTxDvbX3q1s8Y6DUUbwn5PYS3JGuwVso3wrnE32XM8eBmK7vKii0Z-BJMoXCVZvnu4cCadikrZrcvClkTv-6r7bVjHM_bRzBxtVeow0tPkCAx47_ZLGFFS9peXAeinxEmeqe_AWVJgS-FQ2j39=w874-h492-no)

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
