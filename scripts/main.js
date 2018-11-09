var myImage = document.querySelector('img');

myImage.onclick = function () { 
    var myVar = myImage.getAttribute('src');
    if (myVar === 'img/createbranch.png') {
        myImage.setAttribute('src', 'img/pullmerge.png');
    } else {
        myImage.setAttribute('src', 'img/createbranch.png');
    }
}