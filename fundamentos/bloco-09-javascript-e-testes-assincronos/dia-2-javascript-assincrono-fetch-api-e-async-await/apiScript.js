// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
      method: 'GET',
      headers: {'Accept': 'application/json'}
  };

  return fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => data.joke);
};



async function addJokeToDOM() {
    const jokeContainer = document.getElementById('jokeContainer');
    const joke = await fetchJoke();
    jokeContainer.innerHTML = joke;
}


window.onload = () => {
    fetchJoke();
    addJokeToDOM();
};