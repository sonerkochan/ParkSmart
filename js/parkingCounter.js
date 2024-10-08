let freeSpacesCount = 36; // Total number of parking spots

function updateCounter() {
    const counterElement = document.getElementById('freeSpacesCounter');
    counterElement.textContent = freeSpacesCount;
}

function toggleParkingSpot(event) {
    const gridItem = event.target.closest('.grid-item'); 
    
    const carImages = [
        './images/car1.png',
        './images/car4.png',
        './images/car5.png'
    ];

    if (gridItem.classList.contains('occupied')) {
        gridItem.classList.remove('occupied');
        gridItem.innerHTML = gridItem.id; 
        freeSpacesCount++; // Increment free spaces count
    } else {
        gridItem.classList.add('occupied');
        gridItem.innerHTML = ''; 
        const randomIndex = Math.floor(Math.random() * carImages.length);
        const randomCarImage = carImages[randomIndex];
        const img = document.createElement('img');
        img.src = randomCarImage;
        img.alt = 'Car';
        img.style.width = '80%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        img.style.borderRadius = '5px'; 
        gridItem.appendChild(img);
        freeSpacesCount--; // Decrement free spaces count
    }
    updateCounter(); // Update the counter display
}

document.addEventListener('DOMContentLoaded', function() {
    const parkingSpots = document.querySelectorAll('.grid-item');
    parkingSpots.forEach(spot => {
        spot.addEventListener('click', toggleParkingSpot);
    });
    updateCounter(); // Initial counter update
});
