
//extracting coordinates of capital from the link params
let capital_coord=document.currentScript.getAttribute('capital');

// Initialize and add the map
function initMap() {
   
    //splitting coordinates string to array
    capital_coord=capital_coord.split(",");
    // The location of capital of country(parsing float from string type coordinates)
    const capital = { lat: parseFloat(capital_coord[0]), lng: parseFloat(capital_coord[1])};
    // The map, centered at capital of country
    const map = new google.maps.Map(document.getElementById("map-container"), {
        zoom: 4,
        center: capital,
    });
    // The marker, positioned at capital of country
    const marker = new google.maps.Marker({
      position: capital,
      map: map,
    });
  }