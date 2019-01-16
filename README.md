# Tabify
> Spotify + Tabs

Todo: Make a better app name

## Installation

### Currently defunct web version

Sits in the root directory, is what gets pushed through to Netlify -- needs an update eventually, but currently focusing on Electron impelementation

### Electron desktop app

This sits in the `tabifyNew` directory and reads all of the css/js/etc files inside that folder using **Express.js**.

To test locally:

Change directory to tabifyNew
`` cd tabifyNew ``

Install any dependencies
`` npm i ``

Start the Electron app
`` npm start ``

The app will auto-launch and run a local server on `http://localhost:888` -- this is so a local server is ready for a callback redirect to `http://localhost:8888/callback.html` after performing a request of the Spotify Web API.

### How do I test the web version?

Make your changes, then push it to the `Master` branch of this repo. Then go to [tabify.netlify.com](https://tabify.netlify.com) to test it. We require a hosted instance of this for the callbacks to work. **Netlify** is a static hosting service that automatically deploys each time we make a push to this git repo.

For now it's just deploying using the `Master` branch.

## Future Ideas
- *Not everyone uses Spotify, what APIs exist for SoundCloud and Apple Music?*
https://developers.soundcloud.com/docs/api/guide
https://developer.apple.com/documentation/applemusicapi
THEY EXIST 