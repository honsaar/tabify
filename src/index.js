console.log("test");
//Get reference to spotify API
var client_id = "b8f474e0b2954346b6fad21c7e74a39c";
var client_secret = "56d630593c7a4c568b193de32e68d32b";
var redirect_uri = "localhost/tabify/callback";
var authToken = "";

//get current track
$.ajax({
  url: "https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/authorize?client_id=b8f474e0b2954346b6fad21c7e74a39c&response_type=code&redirect_uri=localhost%2Ftabify%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09",
  type: "GET",
  success: function (data) {
    console.log(data);
  },
  error: function (e) {
    console.error(e);
  }
});