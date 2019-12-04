require('./style.scss');

// let htmlWidth = document.documentElement.clientHWidth || document.body.clientWidth;


let htmlDom = document.getElementsByTagName('html')[0];


window.addEventListener('resize',(e) => {
    let htmlWidth = document.documentElement.clientHWidth || document.body.clientWidth;
    htmlDom.style.fontSize = htmlWidth / 10 +'px';
});