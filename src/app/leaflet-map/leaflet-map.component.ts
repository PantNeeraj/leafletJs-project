import { AfterViewInit, Component, OnInit } from '@angular/core';
import '../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js';
declare let L;

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css'],
})
export class LeafletMapComponent implements OnInit, AfterViewInit {
  constructor() {}

  private myMap;

  ngOnInit(): void {
    this.initializeMap();
  }

  ngAfterViewInit(): void {
    this.addGeoJsonFeatures();
    this.myMap.on('click', (e) => {
      let d: any = document.getElementById('coordinates');
      d.innerHTML = `Lat:${e.latlng.lat},Long:${e.latlng.lng}`;
    });
  }

  initializeMap() {
    // map initialisation
    this.myMap = L.map('map').setView([28.4595, 77.0266], 3);
    // tileLayer
    const osm = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 6,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );
    osm.addTo(this.myMap);

    var OPNVKarte = L.tileLayer(
      'https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        attribution:
          'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    );
    var OpenTopoMap = L.tileLayer(
      'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 17,
        attribution:
          'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
      }
    );

    var MtbMap = L.tileLayer(
      'http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &amp; USGS',
      }
    );

    var Esri_WorldImagery = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        attribution:
          'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      }
    );

    var CyclOSM = L.tileLayer(
      'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
      {
        maxZoom: 20,
        attribution:
          '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    );

    var icon = L.icon({
      iconUrl: 'assets/img/leaf-red.png',
      shadowUrl: 'assets/img/leaf-shadow.png',
      iconSize: [38, 95], 
      shadowSize: [50, 64], 
      iconAnchor: [22, 94], 
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76] 
    });
    // marker
    let marker1 = L.marker([28.4595, 77.0266],{icon:icon}).addTo(this.myMap);
    marker1.bindPopup('Main marker' + ' ' + marker1.getLatLng());

    // LAYER GROUP
    var baseMaps = {
      OpenStreetMap: osm,
      OPNVKarte: OPNVKarte,
      OpenTopoMap: OpenTopoMap,
      MtbMap: MtbMap,
      Esri_WorldImagery: Esri_WorldImagery,
      CyclOSM: CyclOSM,
    };

    var overlayMaps = {
      MARKER: marker1,
    };

    var layerControl = L.control
      .layers(baseMaps, overlayMaps)
      .addTo(this.myMap);
  }

  // GeoJson
  addGeoJsonFeatures() {
    var geojsonData = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [
              [72.02636718749999, 26.62781822639305],
              [72.5537109375, 26.470573022375085],
              [72.7734375, 26.86328062676624],
              [73.740234375, 27.293689224852407],
              [72.6416015625, 27.449790329784214],
            ],
          },
        },
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [76.0693359375, 24.766784522874453],
                [75.89355468749999, 24.126701958681668],
                [77.0361328125, 24.16680208530324],
                [77.0361328125, 24.607069137709683],
                [76.552734375, 25.24469595130604],
                [76.0693359375, 24.766784522874453],
              ],
            ],
          },
        },
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [77.36984252929688, 27.803854230585227],
                [77.85324096679688, 27.803854230585227],
                [77.85324096679688, 28.055014699431876],
                [77.36984252929688, 28.055014699431876],
                [77.36984252929688, 27.803854230585227],
              ],
            ],
          },
        },
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [75.05859375, 15.876809064146757],
                [79.1015625, 15.876809064146757],
                [79.1015625, 21.4121622297254],
                [75.05859375, 21.4121622297254],
                [75.05859375, 15.876809064146757],
              ],
            ],
          },
        },
        {
          type: 'Feature',
          properties: {
            'marker-color': '#ef4006',
            'marker-size': 'medium',
            'marker-symbol': 'star-stroked',
          },
          geometry: {
            type: 'Point',
            coordinates: [74.0478515625, 25.878994400196202],
          },
        },
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: [73.740234375, 22.836945920943855],
          },
        },
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: [74.794921875, 29.075375179558346],
          },
        },
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [85.682373046875, 23.563987128451217],
                [86.3140869140625, 23.563987128451217],
                [86.3140869140625, 24.427145340082046],
                [85.682373046875, 24.427145340082046],
                [85.682373046875, 23.563987128451217],
              ],
            ],
          },
        },
        {
          type: 'Feature',
          properties: {
            stroke: '#971c1c',
            'stroke-width': 3,
            'stroke-opacity': 1,
            fill: '#555555',
            'fill-opacity': 0.5,
          },
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [84.5068359375, 24.497146320571886],
                [84.3310546875, 24.05148034322011],
                [84.737548828125, 23.986252599841798],
                [85.166015625, 24.241955877694192],
                [85.1934814453125, 24.477150011148677],
                [84.5068359375, 24.497146320571886],
              ],
            ],
          },
        },
      ],
    };

    if (this.myMap) {
      L.geoJSON(geojsonData, {
        onEachFeature: function (feature, layer) {
          layer.bindPopup(feature.properties.name);
        },
        style: {
          fillColor: 'red',
          opacity: 1,
          color: 'blue',
        },
      })
        .bindPopup('neeraj')
        .addTo(this.myMap);
    }

    var vehicle = L.icon({
      iconUrl: '../assets/img/3330.svg',
      iconSize: [50, 50],
    });

    var marker = L.marker([21.125681, 82.79499799999996], {
      icon: vehicle,
    }).addTo(this.myMap);
    this.myMap.on('click', (e) => {
      let secondMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(
        this.myMap
      );
      L.Routing.control({
        waypoints: [
          L.latLng(21.125681, 82.79499799999996),
          L.latLng(e.latlng.lat, e.latlng.lng),
        ],
      })
        .on('routesfound', (e) => {
          console.log(e);
          e.routes[0].coordinates.forEach((ele, index) => {
            setTimeout((e) => {
              marker.setLatLng([ele.lat, ele.lng]);
            }, 10 * index);
          });
        })
        .addTo(this.myMap);
    });
  }
}
