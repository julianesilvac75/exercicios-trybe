const createEmployee = (fullName) => {
    const name = fullName.toLowerCase();
    const splitName = name.split(' ');
    let email = '';
    
    for (let index = 0; index < splitName.length; index += 1) {
        if (index === (splitName.length - 1)) {
            email += `${splitName[index]}@trybe.com`
        } else {
            email += `${splitName[index]}_`
        }
    }

    return {
        nomeCompleto: fullName,
        email,
    }
}

const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luiza Drumond'),
        id3: callback('Carla Paiva')
    }

    return employees;
}

console.log(newEmployees(createEmployee));