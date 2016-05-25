
/*
              "center": [51.059505, 3.724863]

              "coordinates": [51.054471, 3.725351]

              "name": "City Hall",
              "address": "Botermarkt 1",
              "city": "Gent",
              "country": "Belgium",
              "postalCode": "9000",

              "coordinates": [51.066475, 3.727964]

              "name": "Red Loft",
              "address": "Hugo Van der Goesstraat 17A",
              "city": "Gent",
              "country": "Belgium",
              "postalCode": "9000",

              mapboxgl.accessToken = 'pk.eyJ1IjoidG5ndm5kcm0iLCJhIjoiY2lvYTZiZTAxMDAxZXZqbTV1aW95NXBuZiJ9.QMNlj0bhsP_LeQtCft5V1A';

              var map = new mapboxgl.Map({
                  container: 'map',
                  style: 'mapbox://styles/tngvndrm/cioifhmer000zrcm6a16xtc3j',
                  zoom: 13,
                  zoomControl: true,
                  center: [3.724863, 51.059505] // city hall coordinates (lng, lat)
              }).featureLayer.setGeoJSON(geojson);

              var layerList = document.getElementById('menu');
              var inputs = layerList.getElementsByTagName('input');

              function switchLayer(layer) {
                  var layerId = layer.target.id;
                  map.setStyle('mapbox://styles/mapbox/' + layerId + '-v8');
              }

              for (var i = 0; i < inputs.length; i++) {
                  inputs[i].onclick = switchLayer;
              }




              var geojson = [
                  {
                    "type": "Feature",
                    "geometry": {
                      "coordinates": [
                        51.054471,
                        3.725351
                      ],
                      "type": "Point"
                    },
                    "properties": {
                      "title": "City Hall",
                      "marker-color": "#ECD7C2",
                      "marker-size": "large",
                      "marker-symbol": "harbor"
                    }
                  },
                  {
                    "type": "Feature",
                    "geometry": {
                      "coordinates": [
                        51.066475,
                        3.727964
                      ],
                      "type": "Point"
                    },
                    "properties": {
                      "title": "Red Loft",
                      "marker-color": "#ECD7C2",
                      "marker-size": "large",
                      "marker-symbol": "harbor"
                    }
                  },
              ];

*/
mapboxgl.accessToken = 'pk.eyJ1IjoidG5ndm5kcm0iLCJhIjoiY2lvYTZiZTAxMDAxZXZqbTV1aW95NXBuZiJ9.QMNlj0bhsP_LeQtCft5V1A';

var mapLeaflet = L.mapbox.map('map', 'mapbox://styles/tngvndrm/cioifhmer000zrcm6a16xtc3j')
  .setView([51.059505, 3.724863], 13)

L.marker([51.066475,3.727964]).addTo(mapLeaflet);
L.marker([51.054471,3.725351]).addTo(mapLeaflet);

mapLeaflet.scrollWheelZoom.disable();
