maptilersdk.config.apiKey = mapApi;

const map = new maptilersdk.Map({
    container: 'map', 
    style: maptilersdk.MapStyle.STREETS,
    center: [77.2088, 28.6139], // starting position [lng, lat]
    zoom: 10,
});
