'use strict'

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello, world!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');

    if (mySrc === 'images/firefox-badge-1.png') {
        myImage.setAttribute('src', 'images/firefox-badge-2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-badge-1.png');
    }
}