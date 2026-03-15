// JavaScript code for the Pokémon TCG website functionality

// Example: Fetching Pokémon cards data
async function fetchPokemonCards() {
    const response = await fetch('https://api.pokemontcg.io/v2/cards');
    const data = await response.json();
    return data.data;
}

// Example: Function to display Pokémon cards
function displayPokemonCards(cards) {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `<h3>${card.name}</h3><img src='${card.images.small}' alt='${card.name}' />`;
        container.appendChild(cardElement);
    });
}

// Fetch and display cards on load
window.onload = async () => {
    const cards = await fetchPokemonCards();
    displayPokemonCards(cards);
};