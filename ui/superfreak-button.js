var token = 'cYt8fIC6z9jFdjtjtVhoAtrbm51NxkBTNuh6wcaOHrfRTN3FxjSoAviP0dK62XVL';
var onSuperFreakAuth = function(user_token) {
    alert(user_token);
};

function superfreakauth() {
    window.location = 'http://ec2-54-254-252-98.ap-southeast-1.compute.amazonaws.com/superfreak/welcome/userauth?redirect=' + encodeURI(window.location.href) + '&token=' + token;
}
function superfreakinit() {
    document.getElementById('superfreakbtn').innerHTML = '<button onclick="javascript:superfreakauth();">AUTH ME WITH SUPERFREAK</button>';
    var user_token = window.location.search.replace( "?token=", "" );
    if (user_token !== '')
        onSuperFreakAuth(user_token);
}
document.addEventListener('DOMContentLoaded', superfreakinit, false);
