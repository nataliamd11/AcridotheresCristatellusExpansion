import "leaflet/dist/leaflet.css";
import L from "leaflet";


export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export function maxMinYears(ACYears) {
    return [ACYears[0], ACYears[ACYears.length -1]]
}

export function createMap(el_id, center, zoom=6) {
  const map = L.map(el_id).setView(center, zoom);
  return map
}

export function addTile(el_map) {
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(el_map);
}


function createMarker(location, el_map) {
  console.log('tambien entra');
  L.circleMarker(location, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.4,
      radius: 6
    }).addTo(el_map);
  }

export function addRecordsMarkers(latLonRecords, el_map) {
  console.log('entra');
  for (var i=0; i<latLonRecords.length; i++) {
    console.log(latLonRecords[i]);
    createMarker(latLonRecords[i], el_map);
  }
}