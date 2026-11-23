
// Coordenadas aproximadas do centro do Rio Grande do Norte
const coordenadasRN = [-5.812, -36.592];

// Criação do mapa
const mapa = L.map('map').setView(coordenadasRN, 7);

// Carregamento do mapa-base OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
}).addTo(mapa);
