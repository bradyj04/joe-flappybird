function saveInputNFT() {
    /*Get form data and save to variable*/
    var nftvalue = document.getElementById("nft_url").value;
    /*Create button when function called*/
    var playbutton = document.createElement("a");
    playbutton.innerHTML = "Play Now";
    playbutton.className = "play-button";
    playbutton.id = "play-button";
    playbutton.href = "/game/index.html";
    document.body.appendChild(playbutton);
    /*save nftvalue to cookie*/
    document.cookie = "nft=" + nftvalue;
    //alert(document.cookie);
}
function toFlappy() {
    window.location='/game/index.html';
}