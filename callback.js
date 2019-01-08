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
//see 'https://doxdox.org/jmperez/spotify-web-api-js' for documentation about this library -- simpler than running multiple .get calls ourselves


//on callback, get access token from URL
urlHash = parseURLHash(); //get the access token from the URL parameters
var token = urlHash.access_token; // save to variable
spotifyApi.setAccessToken(token); //set the access token in the API helper

//DOM manipulation
document.getElementById("app").innerHTML = "<p>Hello</p>"; 

//Get the user's own data, returns an object
document.getElementbyId('myButtId').addEventListener('click', getSong);

function getSong() {
    spotifyApi.getMyCurrentPlayingTrack()
        .then(function (data) {
            console.log(data);
            document.getElementById("SongInfo").innerHTML += "<br><p>Trackname: <strong>" + data.item.name + "</strong></p>";
            document.getElementById("SongInfo").innerHTML += "<br><p>Artist: <strong>" + data.item.artists[0].name + "</strong></p>";

            var _searchString = data.item.name;
            for (var i = 0; i < data.item.artists.length; i++) {

                _searchString += ", " + data.item.artists[i].name;
            }
            document.getElementById("SongInfo").innerHTML += "<p>" + _searchString + "</p>";

        }, function (err) {
            console.error(err);
        });

}


    //do things


spotifyApi.getMe() 
  .then(function(data) {
    console.log(data);
    document.getElementById("app").innerHTML += "<br><p>User: <strong>" + data.id +"</strong></p>"; 
  }, function(err) {
    console.error(err);
  });