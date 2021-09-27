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

const citiesAndStates = [
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
  
  function createArray(array) {
      let newArray = [];

      for (let index = 0; index < array.length; index += 1) {
        newArray.push(`${array[index].city} - ${array[index].state}`)
      }
  
      return newArray;
  }

let result = createArray(citiesAndStates)

console.log(result);

console.log('-------------------');

function allGreaterThan(array, number) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] <= number) {
      return false;
      break;
    }
  }

  return true;
}

console.log(allGreaterThan([20, 30, 19, 21], 18));