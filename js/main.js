'use strict'

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello, world!';

// Changing images
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');

    if (mySrc === 'images/firefox-badge-1.png') {
        myImage.setAttribute('src', 'images/firefox-badge-2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-badge-1.png');
    }
}

// Changing user
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}