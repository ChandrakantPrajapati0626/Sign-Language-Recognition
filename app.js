const pics = [
    'url("./Images/Sign-2.jpg")',
    'url("./Images/Sl-3.jpg")',
    'url("./Images/Sign-10.jpg")',
    'url("./Images/sign-11.jpg")',
    'url("./Images/Sl-2.jpg")',
    'url("./Images/sing-2.jpg")',
    'url("./Images/Sl-6.jpg")',
    'url("./Images/Sl-5.jpg")',
];

const pic = document.getElementById('main-random')

function showImage (){
    var a = Math.floor(Math.random()*pics.length);
    var Img = pics[a];
    pic.style.backgroundImage = Img;
}
setInterval(showImage,1000);

function alertBox () {
        alert("Learn More about Sign language");
}
