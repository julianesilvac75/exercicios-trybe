function createStates() {
    let states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal']
    let inputState = document.getElementById('input-state');

    for (let index = 0; index < states.length; index += 1) {
        let state = document.createElement('option');
        state.setAttribute('value', states[index]);
        state.innerText = states[index];
        inputState.appendChild(state);
    }
}

// let inputs = {
//     name: {
//         maxLength: 40,
//         required: true,
//     },
//     email: {
//         maxLength: 50,
//         required: true,
//     },
//     cpf: {
//         maxLength: 11,
//         required: true,
//     },
//     address: {
//         maxLength: 200,
//         required: true,
//     },
//     city: {
//         maxLength: 28,
//         required: true,
//     },
//     state: {
//         type: 'select',
//         required: true,
//     },
//     houseType: {
//         type: 'radio',
//         required: true,
//     },
//     abstract: {
//         maxLength: 1000,
//         required: true,
//     },
//     position: {
//         maxLength: 40,
//         required: true,
//     },
//     positionDescription: {
//         maxLength: 500,
//         required: true,
//     },
//     startDate: {
//         // type: 'date',
//         required: true,
//     },
// }

// function defaultValidation(input, name) {
//     let trimmed = input.value.trim();
//     let validation = inputs[name];

//     if (validation.required && trimmed.length === 0) {
//         return false;
//     }

//     if (validation.maxLength && trimmed.length > validation.maxLength) {
//         return false;
//     }

//     return true;
// }

// function dateValidation(input, name) {
//     if (input.value.length === 0) {
//         return {
//             message: 'A data não foi preenchida!'
//         }
//     }

//     let regex = /^\d\d\/\d\d\/\d\d\d\d$/;

//     if (!regex.test(input.value)) {
//         return {
//             message: 'Data: Formato inválido'
//         };
//     }

//     let splitted = input.value.split('/');
//     let day = splitted[0];
//     let month = splitted[1];
//     let year = splitted[2];

//     if (day < 0 || day > 30) {
//         return {
//             message: 'Dia inválido'
//         };
//     }

//     if (month < 0 || month > 12) {
//         return {
//             message: 'Mês inválido'
//         };
//     }

//     if (year < 0) {
//         return {
//             message: 'Ano inválido'
//         };
//     }

//     return true;
// }

// function getSelectedOption(select) {
//     return select.options[select.selectedIndex];
// }

// function selectValidation(select, name) {
//     let option = getSelectedOption(select);
//     let validation = inputs[name];

//     if (validation.required && (!option || option.disabled)) {
//         return false;
//     }

//     return true;
// }

// function radioValidation(radio, name) {
//     let checked = document.querySelector(`[name=${name}]:checked`);

//     if (checked === null) {
//         return false;
//     }

//     return true;
// }

// let validationStrategies = {
//     default: defaultValidation,
//     // date: dateValidation,
//     select: selectValidation,
//     radio: radioValidation,
// };

// function validateInput(inputName) {
//     let inputType = inputs[inputName].type;
//     let input = document.querySelector(`[name=${inputName}]`);

//     if (inputType) {
//         let validationFunction = validationStrategies[inputType];
//         return validationFunction(input, inputName);
//     }

//     return validationStrategies.default(input, inputName)
// }

// function validateData() {
//     let validationsList = {};

//     for (let inputName in inputs) {
//         let isValid = validateInput(inputName);
//         validationsList[inputName] = isValid;
//     }

//     let counter = 0;
//     let messages = [];

//     for (let index in validationsList) {
//         if (validationsList[index] === false) {
//             counter += 1;
//         }

//         if (validationsList[index].message) {
//             counter += 1;
//             messages.push(validationsList[index].message);
//         }
//     }

//     return {
//         errorQtd: counter,
//         messages,
//     }
// }

// function clearDivs() {
//     let errorDivs = document.querySelectorAll('.error');

//     for (div of errorDivs) {
//         div.remove();
//     }

//     let dataDiv = document.querySelector('.data');

//     if (dataDiv) {
//         dataDiv.remove();
//     }
// }

// function defaultRendering(input) {
//     let p = document.createElement('p');
//     p.innerText = input.value;

//     return p;
// }

// function radioRendering(input) {
//     let p = document.createElement('p');
//     let name = input.getAttribute('name');
//     let checked = document.querySelector(`[name=${name}]:checked`);

//     if (checked) {
//         p.innerText = checked.value;
//     }

//     return p;
// }

// function selectRendering(input) {
//     let p = document.createElement('p');
//     let option = getSelectedOption(input);
//     p.innerText = option.value;

//     return p;
// }

// let renderStrategies = {
//     default: defaultRendering,
//     radio: radioRendering,
//     select: selectRendering,
// }

// function renderData() {
//     let dataDiv = document.createElement('div');
//     dataDiv.className = 'data';

//     let form = document.getElementById('form-data');
//     form.prepend(dataDiv);

//     for (let name in inputs) {
//         let inputType = inputs[name].type; 7
//         let input = document.querySelector(`[name=${name}]`);

//         let element;

//         if (renderStrategies[inputType]) {
//             element = renderStrategies[inputType](input, dataDiv);
//         } else {
//             element = renderStrategies.default(input, dataDiv);
//         }

//         dataDiv.appendChild(element);
//     }
// }

// function renderErrorMessages(messages) {
//     let form = document.getElementById('cv-form');
//     let messageDiv = document.createElement('div');
//     messageDiv.className = 'error bg-warning text-center';
//     form.prepend(messageDiv);

//     for (let message of messages) {
//         let p = document.createElement('p');
//         p.innerText = message;

//         messageDiv.appendChild(p);
//     }
// }

// function handleSubmit(event) {
//     event.preventDefault();

//     let validation = validateData();

//     clearDivs();

//     if (validation.errorQtd === 0) {
//         renderData();
//     } else {
//         validation.messages.unshift('Dados Inválidos');

//         renderErrorMessages(validation.messages);
//     }
// }

function clearFields() {
    let formElements = document.querySelectorAll('input');
    let textArea = document.querySelector('textarea');
    let div = document.getElementById('form-data');

    for (let index = 0; index < formElements.length; index += 1) {
        let userInput = formElements[index];
        userInput.value = '';
    }
    textArea.value = '';
    div.innerText = '';
}




window.onload = function () {
    createStates();

    new Pikaday({
        field: document.getElementById('start-date'),
        format: 'dd/mm/yyyy',
        toString(date, format) {
            // you should do formatting based on the passed format,
            // but we will just return 'D/M/YYYY' for simplicity
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        },
        parse(dateString, format) {
            // dateString is the result of `toString` method
            const parts = dateString.split('/');
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10) - 1;
            const year = parseInt(parts[2], 10);
            return new Date(year, month, day);
        }
    })
    
    new JustValidate('.js-form', {
        rules: {
            name: {
                required: true,
                maxLength: 30
            },
            email: {
                required: true,
                email: true,
                maxLength: 50
            },
            cpf: {
                required: true,
                maxLength: 11,
                minLength: 11
            },
            address: {
                required: true,
                maxLength: 200
            },
            city: {
                required: true,
                maxLength: 28
            },
            state: {
                required: true
            },
            houseType: {
                required: true
            },
            abstract: {
                required: true,
                maxLength: 1000
            },
            position: {
                required: true,
                maxLength: 40
            },
            positionDescription: {
                required: true,
                maxLength: 500
            },
            startDate: {
                required: true
            }
        },
        messages: {
            name: 'Campo obrigatório',
            email: {
                required: 'Campo obrigatório',
                email: 'Digite um e-mail válido'
            },
            cpf: {
                required: 'Campo obrigatório',
                minLength: 'Digite um CPF válido'
            },
            address: 'Campo obrigatório',
            city: 'Campo obrigatório',
            state: 'Campo obrigatório',
            houseType: 'Campo obrigatório',
            abstract: 'Campo obrigatório',
            position: 'Campo obrigatório',
            positionDescription: 'Campo obrigatório',
            startDate: 'Campo obrigatório',
        },
    

        submitHandler: function (form, values) {
            let newDiv = document.createElement('div');

            newDiv.innerHTML = `<p>Nome: ${values.name}</p>
            <p>E-mail: ${values.email}</p>
            <p>CPF: ${values.cpf}</p>
            <p>Endereço: ${values.address}</p>
            <p>Cidade: ${values.city}</p>
            <p>Estado: ${values.state}</p>
            <p>Tipo de imóvel: ${values.houseType}</p>
            <p>Resumo do currículo: ${values.abstract}</p>
            <p>Cargo: ${values.position}</p>
            <p>Descrição do cargo: ${values.positionDescription}</p>
            <p>Data de início: ${values.startDate}</p>`;

            document.getElementById('form-data').appendChild(newDiv);
        }
    })

    
    // let submitButton = document.getElementById('submit-button');
    
    // submitButton.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     console.log('teste');
    
    // });

    let clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click', clearFields)
}
