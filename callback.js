console.log("Callback!");

var spotifyApi = new SpotifyWebApi();

//set up variables
const client_id = "b8f474e0b2954346b6fad21c7e74a39c";
const client_secret = "56d630593c7a4c568b193de32e68d32b";
const redirect_uri = "https://tabify.netlify.com/callback";

console.log(spotifyApi);

function parseURLHash () {
    var search = location.hash.substring(1);
    var urlHash = search?JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}',
                     function(key, value) { return key===""?value:decodeURIComponent(value) }):{}
    return urlHash;
}
urlHash = parseURLHash();
var token = urlHash.access_token;

console.log(token);