const images = ["nala1.jpg", "nala2.jpg", "nala3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const imgUrl = 'url(' + '../vanillaJS/img/' + chosenImage + ')';
document.body.style.backgroundImage = imgUrl;
