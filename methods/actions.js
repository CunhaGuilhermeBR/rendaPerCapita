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
        var objER = /^[0-9]{8}$/;

        cep = trim(cep)
        if (cep.length > 0) {
            if (objER.test(cep))
                return true;
            else
                return false;
        } else
            return false
    },
    showData: async function(cep, incomeCapita, name, res) {
        const api = await returnJson(cep)
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

async function returnJson(cep) {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return response
}

function trim(str) {
    return str.replace(/^s+|s+$/g, '');
}

module.exports = functions