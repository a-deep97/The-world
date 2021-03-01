// Initialize and add the map
function initMap() {
    // The location of newDelhi
    const newDelhi = { lat: 28.6139, lng: 77.2090 };
    // The map, centered at newDelhi
    const map = new google.maps.Map(document.getElementById("map-container"), {
      zoom: 4,
      center: newDelhi,
    });
    // The marker, positioned at newDelhi
    const marker = new google.maps.Marker({
      position: newDelhi,
      map: map,
    });
  }