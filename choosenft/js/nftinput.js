function saveInputNFT() {
    /*Get form data and save to variable*/
    var nftvalue = document.getElementById("nft_url").value;
    /*Create button when function called*/
    var playbutton = document.createElement("button");
    playbutton.innerHTML = "Play Now";
    playbutton.className = "play-button";
    playbutton.id = "play-button";
    document.body.appendChild(playbutton);
    document.cookie = nftvalue;
    alert(document.cookie);
}
function toFlappy() {
    window.location='/game/index.html';
}