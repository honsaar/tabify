//Callback.js

//methods
//TODO: add in error handling -- what if a user cancels? They will reach the callback page regardless
function parseURLHash () {
    var search = location.hash.substring(1);
    var urlHash = search?JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}',
                     function(key, value) { return key===""?value:decodeURIComponent(value) }):{}
    return urlHash;
}


//script
var spotifyApi = new SpotifyWebApi(); //instantiate Spotify Web API library helper -- has built-in functions that can let us make calls to the API.

//set up variables
const client_id = "b8f474e0b2954346b6fad21c7e74a39c";
const client_secret = "56d630593c7a4c568b193de32e68d32b";
const redirect_uri = "https://tabify.netlify.com/callback"; //this can be changed, but Spotify Dashboard needs to be updated with whatever new page we use

urlHash = parseURLHash(); //get the access token from the URL parameters
console.log(urlHash);
var token = urlHash.access_token; // save to variable
console.log(token); //DEBUG: Testing
spotifyApi.setAccessToken(token); //set the access token in the API helper


//DOM manipulation
var app = $("app");
console.log(app);
app.append("<p>Hello</p>"); 

//Test access token
console.log(spotifyApi.getAccessToken());

//DEBUG: Get your own data
spotifyApi.getMe() 
  .then(function(data) {
    console.log(data);
    app.append("<br><p>User: <strong>" + data.id +"</strong></p>"); 
  }, function(err) {
    console.error(err);
  });