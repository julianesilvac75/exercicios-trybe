const url = 'https://api.coincap.io/v2/assets';
const CoinsContainer = document.getElementById('coins-container');

function fetchApi() {
    const myObject = {
        method: 'GET',
        headers: {'Accept-Encoding': 'gzip'}
    };

    return fetch(url, myObject)
      .then(response => response.json())
      .then(data => data.data);
}

async function addCoinsToDOM() {
    const coinsList = await fetchApi();

    coinsList.forEach(coin => {
        const { name, symbol, priceUsd } = coin;
        const newLi = document.createElement('li');
        newLi.innerText = `${name} (${symbol}): ${Number(priceUsd).toFixed(2)}`;
        CoinsContainer.appendChild(newLi);
    });
}

window.onload = () => {
    fetchApi();
    addCoinsToDOM();
};