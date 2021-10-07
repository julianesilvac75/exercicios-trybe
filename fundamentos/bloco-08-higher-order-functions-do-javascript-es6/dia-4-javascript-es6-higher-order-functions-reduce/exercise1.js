// 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];
  
function flatten() {
   return arrays.reduce((acc, currentValue) => {
       currentValue.forEach(value => {
           acc.push(value)
       })
       return acc;
    }, [])
}

console.log(flatten());