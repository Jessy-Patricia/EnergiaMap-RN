
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

// Cria ícones personalizados para cada categoria
function criarIcone(tipo) {

    const ehSolar = tipo === 'Energia Solar';

    const classe = ehSolar ? 'solar' : 'eolica';
    const simbolo = ehSolar ? '☀' : '✦';

    return L.divIcon({
        className: '',
        html: `<div class="custom-marker ${classe}">${simbolo}</div>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -17]
    });
}

// Camada responsável pelos marcadores
const camadaMarcadores = L.layerGroup().addTo(mapa);

// Seleciona os filtros do HTML
const filtros = document.querySelectorAll('.filtro-energia');

// Função para atualizar os marcadores
function atualizarMarcadores() {

    // Remove os marcadores exibidos anteriormente
    camadaMarcadores.clearLayers();

    // Identifica as categorias selecionadas
    const categoriasSelecionadas = Array.from(filtros)
        .filter(filtro => filtro.checked)
        .map(filtro => filtro.value);

    // Percorre os pontos demonstrativos
    pontosDemonstrativos.forEach(ponto => {

        // Verifica se a categoria está selecionada
        if (categoriasSelecionadas.includes(ponto.tipo)) {

            const marcador = L.marker(ponto.coordenadas, {
    icon: criarIcone(ponto.tipo)
});

            marcador.bindPopup(`
                <h3>${ponto.nome}</h3>
                <p><strong>Categoria:</strong> ${ponto.tipo}</p>
                <p>${ponto.descricao}</p>
                <small>Localização ilustrativa — não representa uma instalação real.</small>
            `);

            marcador.addTo(camadaMarcadores);
        }
    });
}

// Detecta alterações nos filtros
filtros.forEach(filtro => {
    filtro.addEventListener('change', atualizarMarcadores);
});

// Exibe os marcadores iniciais
atualizarMarcadores();
