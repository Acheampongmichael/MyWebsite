let sunElem = document.querySelector('.sun')
let bodyElem = document.querySelector('body')
let picElem = document.querySelector('.profile-pic')


sunElem.addEventListener('click',function(){
    bodyElem.classList.toggle('dark-theme')
    if (bodyElem.classList.contains('dark-theme')){
        sunElem.src = 'images/moon.png'
    }
    else{
        sunElem.src = 'images/sun.png'
    }
})


function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}


// Function to toggle fade in and out effect
function toggleFadeInOut() {
    var introText = document.getElementById("introText");
    introText.classList.toggle("fade-out"); // Toggle fade-out class
}

// Start toggling fade in and out when the page loads
window.onload = function() {
    setInterval(toggleFadeInOut, 4000); // Toggle every 4 seconds (2s fadeIn + 2s fadeOut)
}


// Function to toggle visibility of additional content
function toggleVisibility(elementId) {
    var element = document.getElementById(elementId);
    element.style.display === "none" ? element.style.display = "block" : element.style.display = "none";
}





