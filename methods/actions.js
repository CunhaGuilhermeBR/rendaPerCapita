const axios = require('axios')
var functions = {
    calculateIncome: function(income, persons) {
        if (income == 0)
            return 0
        else {
            persons = parseInt(persons) + 1
            return income / persons
        }
    },
    validateCep: function(cep) {
        var valid_cep_regex = /^[0-9]{8,}$/;

        cep = trim(cep)
        return valid_cep_regex.test(cep)
    },
    showData: async function(cep, incomeCapita, name, res) {
        const api = await returnJson(cep)
        if (api == null) {
            const error_message = 'Informacao nao disponivel no momento'
            res.render('showData', {
                cep: cep,
                person: name,
                capita: incomeCapita,
                publicPlace: error_message,
                complement: error_message,
                district: error_message,
                city: error_message,
                state: error_message
            })
        } else {
            res.render('showData', {
                cep: cep,
                person: name,
                capita: incomeCapita,
                publicPlace: api.data.logradouro,
                complement: api.data.complemento,
                district: api.data.bairro,
                city: api.data.localidade,
                state: api.data.uf
            })
        }

    }
}

async function returnJson(cep) {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        return response
    } catch {
        console.log('Error', error.message)
        return null
    }
}

function trim(str) {
    return str.replace(/^s+|s+$/g, '');
}

module.exports = functions