// Array of photo URLs - replace these with your actual photo URLs
const photos = [
    'https://picsum.photos/800/600?random=1',
    'https://picsum.photos/800/600?random=2',
    'https://picsum.photos/800/600?random=3',
    'https://picsum.photos/800/600?random=4',
    'https://picsum.photos/800/600?random=5'
];

let currentPhotoIndex = 0;
const mainPhoto = document.getElementById('mainPhoto');

// Set initial photo
mainPhoto.src = photos[currentPhotoIndex];

// Function to show previous photo
function showPreviousPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    mainPhoto.src = photos[currentPhotoIndex];
}

// Function to show next photo
function showNextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    mainPhoto.src = photos[currentPhotoIndex];
}

// Add click event listeners
document.getElementById('prevArea').addEventListener('click', showPreviousPhoto);
document.getElementById('nextArea').addEventListener('click', showNextPhoto);

// Optional: Add keyboard navigation
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        showPreviousPhoto();
    } else if (event.key === 'ArrowRight') {
        showNextPhoto();
    }
});
