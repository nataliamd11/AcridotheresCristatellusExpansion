import "leaflet/dist/leaflet.css";
import L from "leaflet";


export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export function maxMinYears(ACYears) {
    return [ACYears[0], ACYears[ACYears.length -1]]
}

export function createMap(el_id, center, zoom=13) {
  const map = L.map(el_id).setView(center, zoom);
  return map
}

export function addTile(el_map) {
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(el_map);
}

export function createMarker(location, el_map) {
  L.circleMarker(location, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 8
    }).addTo(el_map);
  }