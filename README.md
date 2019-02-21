# Tabify
> Spotify + Tabs, built in Electron.js

## Dev Testing

Implemented some basic automated code review using Codacy and CodeClimate.
[![Maintainability](https://api.codeclimate.com/v1/badges/1d510ec22e1b82c8d825/maintainability)](https://codeclimate.com/github/honsaar/Tabify/maintainability)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0977b7b0c69c480494def5c900cfacdd)](https://www.codacy.com/app/honsaar/Tabify?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=honsaar/Tabify&amp;utm_campaign=Badge_Grade)

## Installation

The Electron implementation sits in the `tabifyNew` directory and reads all of the css/js/etc files inside that folder and runs a local server using **Express.js**.

Clone the repo and install any dependencies
```bash
git clone https://github.com/honsaar/tabify.git
 cd tabify
 npm i
 ```
Start the Electron app
```bash
 npm start 
 ```
The app will auto-launch and run a local server on `http://localhost:8888` -- this is so a local server is ready for a callback redirect to `http://localhost:8888/callback.html` after performing a request of the Spotify Web API.

### Since this is built in JS, is there a web version?

Focus is on the desktop Electron version on the `master` branch, but there may be some development soon on the `web` branch in the future.

## Future Ideas
*Not everyone uses Spotify, what APIs exist for SoundCloud and Apple Music?*
> YES 
https://developers.soundcloud.com/docs/api/guide,
https://developer.apple.com/documentation/applemusicapi THEY EXIST 
