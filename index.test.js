const test = require('tape')
const app = require('./methods/actions')

console.log('TESTES!')

test('Renda per Capita', (t) => {
    t.assert(app.calculateIncome(1000, 3) === 250, "Renda per Capita certa!")
    t.end()
})

test('Renda per Capita sem dependente', (t) => {
    t.assert(app.calculateIncome(1000, 0) === 1000, "Renda per Capita certa!")
    t.end()
})

test('Validacao CEP', (t) => {
    t.assert(app.validateCep('30855100') === true, "Validacao correta")
    t.end()
})

test('Validacao CEP numero errado', (t) => {
    t.assert(app.validateCep('12345') === false, "Validacao correta")
    t.end()
})

test('Validacao CEP nao e um numero', (t) => {
    t.assert(app.validateCep('cep') === false, "Validacao correta")
    t.end()
})