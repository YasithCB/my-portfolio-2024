function initMap() {
    const location = { lat: 25.3562, lng: 55.4272 }; // Dubai coordinates

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Your Location",
    });
}
