# ParkSmart
Parking Application

Documentation

Overview
This documentation describes the structure, styling, and functionality of a parking system web page called ParkSmart. It uses HTML for structuring the layout, CSS for styling the elements, and JavaScript for handling user interaction to simulate parking spot occupancy.

Table of Contents
    HTML
        Structure
        Key Elements
    CSS
        Layout
        Key Styles
    JavaScript
        Interactivity
        Event Handling


HTML
    The HTML structure defines the layout of the parking system interface. It includes a grid layout representing parking spots, roads, and a navigation bar.

Structure
    The document begins with the HTML5 <!DOCTYPE html> declaration, setting up the basic structure of the web page:

                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
                    <title>ParkSmart</title>
                    <link rel="stylesheet" href="css/normalize.css"/>
                    <link rel="stylesheet" href="css/style.css"/>
                </head>
                <body>
                    <nav class="navbar"></nav>

                    <div class="main-div">
                        <div class="topbar"></div>

                        <main class="main-section">
                            <div class="parking-div">
                                <div class="left-road"></div>

                                <div class="parking-center">
                                    <div class="upper-road"></div>

                                    <!-- Top Parking Grid -->
                                    <div class="top-parking">
                                        <div class="grid-container">
                                            <!-- Parking Spots A1 to A26 -->
                                        </div>
                                    </div>

                                    <div class="middle-road"></div>

                                    <!-- Bottom Parking Grid -->
                                    <div class="bottom-parking">
                                        <div class="grid-container">
                                            <!-- Parking Spots B1 to B26 -->
                                        </div>
                                    </div>

                                    <div class="bottom-road"></div>
                                </div>

                                <div class="right-road"></div>
                            </div>
                        </main>
                    </div>

                    <script src="js/script.js"></script>
                </body>
                </html>

    Key Elements
        Navbar: Represented by <nav class="navbar"></nav>. It's a vertical navigation bar on the left side of the page.
        Parking Grid: Two sets of parking spots (top and bottom) represented by the grid-container class. Each parking spot is a div with an id for identification (e.g., A1, A2, B1).
        Roads: Div elements representing roads (left, right, upper, middle, and bottom roads) are used as visual separators between parking areas.


CSS
    The CSS file defines the visual layout of the page, including grid arrangement, background images, and responsive scaling.

    Layout
        The main layout consists of a flexbox structure to organize the parking spots and roads horizontally. Here's the style for the body:

            body {
                width: 2060px; 
                height: 1000px;   
                display: flex;
                flex-direction: row;
                margin: 0;
                overflow: hidden; 
            }

    Key Styles
        Grid Layout: The parking spots are organized in a grid format. Each grid-container uses CSS Grid to arrange 13 columns of parking spots:

            .grid-container {
                display: grid;
                grid-template-columns: repeat(13, 121px);
                grid-gap: 4px;
                height: 100%;
                box-sizing: border-box;
            }

        Parking Spots: Individual parking spots are styled as grid-item, which adjusts their font size, cursor, and layout:

            .grid-item {
                color: #d1bd13;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100px;
                font-weight: bold;
                cursor: pointer;
                font-size: 24px;
            }

        Roads: The background images for roads are handled via background-image, and their size is adjusted using background-size: contain.

            .left-road, .right-road {
                background-image: url(../images/road-leftandright.png);
                background-size: contain;
                width: 100%;
                height: 846px;
            }

        Occupied Parking Spots: When a parking spot is marked as occupied, a larger font size and an image of a car are applied:

            .grid-item.occupied {
                font-size: 40px;
            }

            .grid-item img {
                width: 80%;
                height: 50%;
                object-fit: contain;
            }

JavaScript
    The JavaScript file provides interactivity by allowing users to toggle parking spots between vacant and occupied states.

    Interactivity
        When a user clicks on a parking spot, the JavaScript code determines whether the spot is occupied or not and updates its status.

    Event Handling
        The core logic is the toggleParkingSpot function, which toggles a parking spot between occupied and unoccupied states:

            function toggleParkingSpot(event) {
                const gridItem = event.target.closest('.grid-item'); 
                
                const carImages = [
                    '../images/car1.png',
                    '../images/car4.png',
                    '../images/car5.png'
                ];

                if (gridItem.classList.contains('occupied')) {
                    gridItem.classList.remove('occupied');
                    gridItem.innerHTML = gridItem.id; 
                } else {
                    gridItem.classList.add('occupied');
                    gridItem.innerHTML = ''; 

                    const randomIndex = Math.floor(Math.random() * carImages.length);
                    const randomCarImage = carImages[randomIndex];

                    const img = document.createElement('img');
                    img.src = randomCarImage;
                    img.alt = 'Car';
                    gridItem.appendChild(img);
                }
            }

        Occupied/Unoccupied Toggle: When the parking spot is clicked, the occupied class is added or removed. The class addition causes the parking spot to display a car image.
        Random Car Image: A random car image is selected from an array of car images using Math.random().

    Event Listener
        The event listener waits for the DOM content to load and adds a click event to each parking spot:

            document.addEventListener('DOMContentLoaded', function() {
                const parkingSpots = document.querySelectorAll('.grid-item');
                parkingSpots.forEach(spot => {
                    spot.addEventListener('click', toggleParkingSpot);
                });
            });
        
        This ensures that the parking spots are interactive once the page has fully loaded.

Images
    
Conclusion
    This documentation provides an overview of the ParkSmart parking system. It covers how the HTML defines the page structure, how CSS styles the layout, and how JavaScript provides interactivity. This system allows users to click on parking spots and simulate their occupancy dynamically.
