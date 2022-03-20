const images = ["nala1.jpg", "nala2.jpg", "nala3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const imgUrl = 'url(' + '/vanilla_js/img/' + chosenImage + ')';
document.body.style.backgroundImage = imgUrl;
