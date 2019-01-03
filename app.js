//app.js -- Landing Page


//FOR REFERENCE -- coded into URL in Window.Location call.
//client_id = "b8f474e0b2954346b6fad21c7e74a39c";
//client_secret = "56d630593c7a4c568b193de32e68d32b";
//redirect_uri = "https://tabify.netlify.com/callback";

//TODO: Make this an event listener from a login button -- to be done when a basic UI has been set up, perhaps
window.location = "https://accounts.spotify.com/authorize?client_id=b8f474e0b2954346b6fad21c7e74a39c&redirect_uri=https:%2F%2Ftabify.netlify.com%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123";