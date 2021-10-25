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

function convertToBRL(priceUsd) {
    return fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json')
      .then(response => response.json())
      .then(data => priceUsd * Number(data.usd.brl));
}

async function addCoinsToDOM() {
    const coinsList = await fetchApi();
    const filtered = coinsList.filter(coin => Number(coin.rank) <= 10);

    filtered.forEach(async coin =>  {
        const { name, symbol, priceUsd } = coin;
        const convertedBRL = await convertToBRL(Number(priceUsd));
        const newLi = document.createElement('li');
        newLi.innerText = `${name} (${symbol}): ${convertedBRL.toFixed(2)}`;
        CoinsContainer.appendChild(newLi);
    });
}

window.onload = () => {
    fetchApi();
    addCoinsToDOM();
};