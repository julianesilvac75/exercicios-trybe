const button = document.querySelector('button')

window.onload = () => {
    let clickCount = 0;

    button.addEventListener('click', () => {
        clickCount += 1;
        document.querySelector('.counter').innerText = `Quantidade de cliques: ${clickCount}`;
    })
}