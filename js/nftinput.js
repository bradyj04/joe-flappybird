function saveInputNFT() {
    /*Get form data and save to variable*/
    if(document.getElementById("nft_url").value == "" || document.getElementById("nft_url").value == null) {
        var field_alert = document.createElement("h2");
        field_alert.innerHTML = "Please enter a valid NFT URL";
        field_alert.id = "field_alert";
        field_alert.classList.add("error-shake");
        if(document.getElementById("field_alert") == null) {
            document.body.appendChild(field_alert);
        }else{
            document.getElementById("field_alert").remove();
            document.body.appendChild(field_alert);
        }
        
    }else{
        var nftvalue = document.getElementById("nft_url").value;
        /*Create button when function called*/
        var playbutton = document.createElement("a");
        playbutton.innerHTML = "Play Now";
        playbutton.className = "play-button";
        playbutton.id = "play-button";
        playbutton.href = "./game/index.html";
        document.body.appendChild(playbutton);
        /*save nftvalue to cookie*/
        document.cookie = "nft=" + nftvalue;
    }
}