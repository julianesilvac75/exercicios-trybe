let backgroundButton = document.getElementsByClassName('btn-bg');
let colorSquare = document.getElementsByClassName('btn-color');

// Função que pega o estilo do botao
function getCompStyle(element, style) {
    return window.getComputedStyle(element).getPropertyValue(style)
}

let content = document.getElementById('content');

// evento que muda a cor do background
for (let index = 0; index < backgroundButton.length; index += 1) {
    backgroundButton[index].addEventListener('click', function() {
        let bgColor = getCompStyle(colorSquare[index], 'background-color');
        content.style.backgroundColor = bgColor;
        localStorage.setItem('background', bgColor);
    })
}

let fontColorButton = document.getElementsByClassName('btn-font-color');
let btnFamily = document.getElementsByClassName

// evento que muda a cor da fonte
for (let index = 0; index < fontColorButton.length; index += 1) {
    fontColorButton[index].addEventListener('click', function() {
        let color = getCompStyle(colorSquare[index], 'background-color');
        content.style.color = color;
        localStorage.setItem('color', color);
    })
}

let fontFamilyButton = document.getElementsByClassName('font-family');
let fontfamily = document.getElementsByClassName('btn-family');

// evento que muda a font family
for (let index = 0; index < fontFamilyButton.length; index += 1) {
    fontFamilyButton[index].addEventListener('click', function() {
        let family = getCompStyle(fontfamily[index], 'font-family');
        content.style.fontFamily = family;
        localStorage.setItem('fontFamily', family);
    })
}

function initialRenderization() {
    content.style.backgroundColor = localStorage.getItem('background');
    content.style.color = localStorage.getItem('color');
    content.style.fontFamily = localStorage.getItem('fontFamily');
}

window.onload = initialRenderization();