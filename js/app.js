var bigImgSelector = '[data-img-type="target"]';
var titleImgSelector = '[data-img-type="title"]';
var thumbImgSelector = '[data-img-type="trigger"]';


function changeImg(){
    'use strict';
    var bigImg = document.querySelector(bigImgSelector);
    bigImg.setAttribute('src', 'obrazy/wydra3.jpg')

    var titleImg = document.querySelector(titleImgSelector);
    titleImg.textContent = 'Odrobina relaksu'
}
