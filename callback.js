//Callback.js

const ugs = require('ultimate-guitar-scraper')


//methods
//TODO: add in error handling -- what if a user cancels? They will reach the callback page regardless
function parseURLHash () {
    var search = location.hash.substring(1);
    var urlHash = search?JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}',
                     function(key, value) { return key===""?value:decodeURIComponent(value) }):{}
    return urlHash;
}

//script
var Spotify = require('spotify-web-api-js');
var spotifyApi = new Spotify();
//see 'https://doxdox.org/jmperez/spotify-web-api-js' for documentation about this library -- simpler than running multiple .get calls ourselves

//string for searching
var _searchString;
var tabTypes = ['Guitar Pro','Tab',  'Chords'];
//on callback, get access token from URL

//TODO: get the tokens in another way

urlHash = parseURLHash(); //get the access token from the URL parameters
var token = urlHash.access_token; // save to variable
spotifyApi.setAccessToken(token); //set the access token in the API helper

//Get the user's own data, returns an object
window.onload = function () {
    console.log(token);
    console.log(spotifyApi);
    console.log(urlHash)



    spotifyApi.getMe() 
  .then(function(data) {
    console.log(data);
    document.getElementById("user").innerHTML = "<strong>" + data.id +"</strong>"; 
  }, function(err) {
    console.error(err);
  });


    console.log("AAA");
    document.getElementById('myButtId').addEventListener('click', function () { 
    spotifyApi.getMyCurrentPlayingTrack()
        .then(function (data) {
            console.log("BBB");
            console.log(data);
            document.getElementById("SongInfo").innerHTML = "";
            document.getElementById("SongInfo").innerHTML += "<p>Track name: <strong>" + data.item.name + "</strong></p>";
            document.getElementById("SongInfo").innerHTML += "<p>Artist: <strong>" + data.item.artists[0].name + "</strong></p>";

            _searchString = data.item.name;
            // adjust this for different services if required? 
            //Do we need it as a comma-separated value or should we make it into an object where we can build our queries out ourselves using var song as an object - e.g.: song.name; song.artist[0], song.artist[1], and so on instead of a string we perform transforms on?

            //also, how do we cover remastered versions of songs? 'All You Need is Love - Remastered, Beatles, The' as an example. How do we string match with the APIs? (this is likely not something we need to care about right now -- we don't know how the APIs work exactly yet so whatevs. Just some considerations)

            for (var i = 0; i < data.item.artists.length; i++) {

                _searchString += ", " + data.item.artists[i].name;
            }
            document.getElementById("SongInfo").innerHTML += "<p>Search string for API: <strong>" + _searchString + "</strong></p>";
            document.getElementById("SongInfo").innerHTML += "<button class='butts' id='buttsdlID'>Get Tab!</button>";

        }, function (err) {
            console.error(err);
        });

});

    // document.getElementById('buttsdlID').addEventListener('click', function () {
    //     console.log("clicked Tab butt")
    //     ugs.search({
    //         query: _searchString,
    //         page: 1,
    //         type: types
    //     }, (error, tabs) => {
    //         if (error) {
    //             console.log(error);
    //         } else {
    //             document.getElementById("SongInfo").innerHTML += "<p>" + tabs.url + "</p>";

    //         }
    //     });

    // });

    //do things



}

