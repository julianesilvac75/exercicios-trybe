function getEvenNumbers(array) {
    let newArray = [];
    for (let index of array) {
        if (index % 2 === 0) {
            newArray.push(index);
        }
    }

    return newArray;
}

console.log(getEvenNumbers([ 1,2,3,4,5]));

console.log('-----------');

function citiesAndStates(array) {
    let newArray = [];

    
    for (let index = 0; index < array.length; array += 1) {

      let word1 = '';
      let word2 = '';
      for(key in array[index]) {
        console.log(city1[0]); 
            // do something with value;
      }
    }

    return newArray;
}

const citiesAndState = [
    {
      city: 'Belo Horizonte',
      state: 'Minas Gerais',
    },
    {
      city: 'Salvador',
      state: 'Bahia',
    },
    {
      city: 'Porto Alegre',
      state: 'Rio Grande do Sul',
    },
    {
      city: 'Manaus',
      state: 'Amazonas',
    }
  ]
  

  // console.log(citiesAndState[0]);

  // console.log(citiesAndStates(citiesAndState));