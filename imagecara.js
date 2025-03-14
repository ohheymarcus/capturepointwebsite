// Define the images to be used in the carousel
const images = [
    'images/cara.jpeg',
    'images/cara1.jpeg',
    'images/cara2.jpeg'
];

// Select the hero section
const heroSection = document.querySelector('.hero');

// Set an initial index for the images
let currentIndex = 0;

// Function to change the background image
function changeBackgroundImage() {
    // Set the background image with a fade-out effect
    heroSection.style.transition = 'background-image 1s ease-in-out';
    heroSection.style.backgroundImage = `url(${images[currentIndex]})`;

    // Update index to loop through images
    currentIndex = (currentIndex + 1) % images.length;
}

// Set the first background image initially
heroSection.style.backgroundImage = `url(${images[currentIndex]})`;

// Change the background every 5 seconds (5000ms)
setInterval(changeBackgroundImage, 5000);





