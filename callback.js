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

//Get the user's own data, returns an object
window.onload = function () {
    document.getElementById('myButtId').addEventListener('click', function (getSong) { //Question: What dis? Where is the getSong parameter coming from? We need use strict up in this shit
    spotifyApi.getMyCurrentPlayingTrack()
        .then(function (data) {
            console.log(data);
            document.getElementById("SongInfo").innerHTML = "";
            document.getElementById("SongInfo").innerHTML += "<p>Track name: <strong>" + data.item.name + "</strong></p>";
            document.getElementById("SongInfo").innerHTML += "<p>Artist: <strong>" + data.item.artists[0].name + "</strong></p>";

            var _searchString = data.item.name;
            // adjust this for different services if required? 
            //Do we need it as a comma-separated value or should we make it into an object where we can build our queries out ourselves using var song as an object - e.g.: song.name; song.artist[0], song.artist[1], and so on instead of a string we perform transforms on?

            //also, how do we cover remastered versions of songs? 'All You Need is Love - Remastered, Beatles, The' as an example. How do we string match with the APIs? (this is likely not something we need to care about right now -- we don't know how the APIs work exactly yet so whatevs. Just some considerations)

            for (var i = 0; i < data.item.artists.length; i++) {

                _searchString += ", " + data.item.artists[i].name;
            }
            document.getElementById("SongInfo").innerHTML += "<p>Search string for API: <strong>" + _searchString + "</strong></p>";

        }, function (err) {
            console.error(err);
        });

});


    //do things


spotifyApi.getMe() 
  .then(function(data) {
    console.log(data);
    document.getElementById("app").innerHTML += "<br><p>User: <strong>" + data.id +"</strong></p>"; 
  }, function(err) {
    console.error(err);
  });
}
