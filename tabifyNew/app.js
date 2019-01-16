//app.js -- Landing Page


//FOR REFERENCE -- coded into URL in Window.Location call.
//client_id = "b8f474e0b2954346b6fad21c7e74a39c";
//client_secret = "56d630593c7a4c568b193de32e68d32b";
//OLD redirect_uri = "https://localhost:8888/callback";
//NEW redirect_uri = ""

window.onload = function () {
    console.log(window.location);
    document.getElementById('loginButt').addEventListener('click', function (e) {
            document.getElementById('loginButt').innerText = "Redirecting to Spotify Authentication...";
            window.location = "https://accounts.spotify.com/authorize?client_id=b8f474e0b2954346b6fad21c7e74a39c&redirect_uri=http:%2F%2Flocalhost:8888%2Fcallback.html&scope=user-read-private%20user-read-currently-playing%20user-read-playback-state%20user-read-email&response_type=token&state=123";
        });
    };
