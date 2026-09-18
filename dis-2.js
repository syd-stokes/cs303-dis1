let isScaryBool = false;

// When the button is pushed, its onclick attribute "toggleScariness()" activates
function toggleScariness() {

    // If currently NOT scary
    if (isScaryBool === false) {

        // Make it scary by making the cute image disappear and the scary image appear
        document.getElementById("nice-cat-img").style.display = "none";
        document.getElementById("evil-cat-img").style.display = "block";

        // Change boolean to true
        isScaryBool = true;
    }

    // Else if currently scary
    else {

        // Make the scary image appear and the cute image disappear
        document.getElementById("nice-cat-img").style.display = "block";
        document.getElementById("evil-cat-img").style.display = "none";

        // Change boolean to false
        isScaryBool = false;
    }
}