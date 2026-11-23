
// Coordenadas aproximadas do centro do Rio Grande do Norte
const coordenadasRN = [-5.812, -36.592];

// Criação do mapa
const mapa = L.map('map').setView(coordenadasRN, 7);

// Carregamento do mapa-base OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
}).addTo(mapa);

// Pontos demonstrativos de energias renováveis
const pontosDemonstrativos = [
    {
        nome: 'Natal',
        coordenadas: [-5.7793, -35.2009],
        tipo: 'Energia Solar',
        descricao: 'Exemplo demonstrativo de referência em energia solar.'
    },
    {
        nome: 'Mossoró',
        coordenadas: [-5.1875, -37.3443],
        tipo: 'Energia Eólica',
        descricao: 'Exemplo demonstrativo de referência em energia eólica.'
    },
    {
        nome: 'João Câmara',
        coordenadas: [-5.5375, -35.8197],
        tipo: 'Energia Eólica',
        descricao: 'Exemplo demonstrativo de referência em energia eólica.'
    }
];

// Adiciona os marcadores ao mapa
pontosDemonstrativos.forEach(ponto => {

    const marcador = L.marker(ponto.coordenadas);

    marcador.addTo(mapa);

    marcador.bindPopup(`
        <h3>${ponto.nome}</h3>
        <p><strong>Categoria:</strong> ${ponto.tipo}</p>
        <p>${ponto.descricao}</p>
        <small>Localização ilustrativa — não representa uma instalação real.</small>
    `);

});
