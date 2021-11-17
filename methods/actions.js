var functions = {
    calculateIncome: function(income, persons) {
        persons = parseInt(persons) + 1
        return income / persons
    },
    validateCep: function(cep) {
        return cep.length == 8
    }
}

module.exports = functions