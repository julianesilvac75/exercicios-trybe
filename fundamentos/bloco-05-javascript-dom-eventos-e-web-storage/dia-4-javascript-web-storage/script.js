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

let changeBtn = document.getElementsByClassName('btn-change');

// Funçao que muda espacamento e tamanho
function changeFunction(event) {
    let button = event.target;
    
    if (button.classList.contains('decrease-size')) {
        let currentSize = parseInt(getCompStyle(content, 'font-size'));
        if (currentSize > 12) {
            let newSize = `${currentSize - 2}px`;
            localStorage.setItem('fontSize', newSize)
            content.style.fontSize = newSize;
        }
    } else if (button.classList.contains('increase-size')) {
        let currentSize = parseInt(getCompStyle(content, 'font-size'));
        if (currentSize < 32) {
            let newSize = `${currentSize + 2}px`;
            localStorage.setItem('fontSize', newSize)
            content.style.fontSize = newSize;
        }
    } else if (button.classList.contains('decrease-lineheight')) {
        let currentLineHeight = parseInt(getCompStyle(content, 'line-height'));
        if (currentLineHeight > 16) {
            let newLineHeight = `${currentLineHeight - 2}px`;
            content.style.lineHeight = newLineHeight;
            localStorage.setItem('lineHeight', newLineHeight);
        }
    } else if (button.classList.contains('increase-lineheight')){
        let currentLineHeight = parseInt(getCompStyle(content, 'line-height'));
        if (currentLineHeight < 40) {
            let newLineHeight = `${currentLineHeight + 2}px`;
            content.style.lineHeight = newLineHeight;
            localStorage.setItem('lineHeight', newLineHeight);
        }
    }
}

for (let index = 0; index < changeBtn.length; index += 1) {
    changeBtn[index].addEventListener('click', changeFunction);
}


function initialRenderization() {
    content.style.backgroundColor = localStorage.getItem('background');
    content.style.color = localStorage.getItem('color');
    content.style.fontFamily = localStorage.getItem('fontFamily');
    content.style.fontSize = localStorage.getItem('fontSize');
    content.style.lineHeight = localStorage.getItem('lineHeight');
}

window.onload = initialRenderization();