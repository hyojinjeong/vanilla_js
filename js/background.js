const images = ["starry_night1.jpg", "starry_night2.jpg", "starry_night3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const imgUrl = 'url(' + '../vanilla_js/img/' + chosenImage + ')';
console.log(imgUrl);
document.body.style.backgroundImage = imgUrl;
