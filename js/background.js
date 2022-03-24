const images = ["starry_night1.jpg", "starry_night2.jpg", "starry_night3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const imgUrl = 'url(' + '../vanillaJS/img/' + chosenImage + ')';
document.body.style.backgroundImage = imgUrl;
