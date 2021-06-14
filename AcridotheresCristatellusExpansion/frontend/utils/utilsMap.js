import "leaflet/dist/leaflet.css";
import L from "leaflet";


export function createMap(el_id, center, zoom=6) {
  const map = L.map(el_id).setView(center, zoom);
  return map
}

export function createMarkerGroup(el_map) {
  var markerGroup = L.layerGroup().addTo(el_map);
  return markerGroup
}

export function addTile(el_map) {
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(el_map);
}

function createMarker(location, el_map, marker_group) {
  console.log('tambien entra');
  var recordMarker = L.circleMarker(location, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.4,
      radius: 6
    })
  recordMarker.addTo(marker_group);
  recordMarker.addTo(el_map);
  }

export function addRecordsMarkers(latLonRecords, el_map, marker_group) {
  for (var i=0; i<latLonRecords.length; i++) {
    console.log(latLonRecords[i]);
    createMarker(latLonRecords[i], el_map, marker_group);
  }
}

export function removeMarkers(marker_group) {
  marker_group.clearLayers();
}
  
