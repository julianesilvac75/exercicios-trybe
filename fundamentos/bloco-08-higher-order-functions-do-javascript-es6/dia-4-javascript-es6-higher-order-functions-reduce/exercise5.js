// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];
  
function containsA() {
    const lettersA = names.map(name => {
        const arrayOfLetters = name.toLowerCase().split('');

        const sum = arrayOfLetters.filter(letter => letter === 'a').length;

        return sum;
    })

    const sum = lettersA.reduce((acc, number) => acc + number);

    return sum;
}

console.log(containsA());