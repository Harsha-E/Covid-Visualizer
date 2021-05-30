let youtubeData;
let countries;

const mappa = new Mappa('Leaflet');
let trainMap;
let canvas;

let data = [];

const options = {
  lat: 0,
  lng: 0,
  zoom: 1.5,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function preload() {
  youtubeData = loadTable('subscribers_geo.csv', 'header');
  countries = loadJSON('countries.json');

}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  trainMap = mappa.tileMap(options);
  trainMap.overlay(canvas);

  let maxSubs = 0;
  let minSubs = Infinity;

  for (let row of youtubeData.rows) {
    let country = row.get('country_id').toLowerCase();
    let latlon = countries[country];
    if (latlon) {
      let lat = latlon[0];
      let lon = latlon[1];
      data.push({
        lat,
        lon
      });
    }
  }

  for (let country of data) {
    country.diameter = map(sqrt(country.count),  1, 20);
  }

}

function draw() {
  clear();
  for (let country of data) {
    const pix = trainMap.latLngToPixel(country.lat, country.lon);
    fill(frameCount % 255, 0, 200, 100);
    const zoom = trainMap.zoom();
    const scl = pow(2, zoom);
    ellipse(pix.x, pix.y, 5);
  }



}
