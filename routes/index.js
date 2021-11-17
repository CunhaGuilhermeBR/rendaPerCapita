const axios = require('axios')
const express = require('express')
const router = express.Router()
const actions = require('../methods/actions')


router.get('/', (req, res) => { res.render('getData') })

router.post('/calculate', async(req, res) => {
    if (actions.validateCep(req.body.cep)) {
        try {
            axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`).then(resp => {
                incomeCapita = actions.calculateIncome(req.body.income, req.body.dependents)
                res.render('showData', { cep: req.body.cep, person: req.body.name, capita: incomeCapita, publicPlace: resp.data.logradouro, complement: resp.data.complemento, district: resp.data.bairro, city: resp.data.localidade, state: resp.data.uf })
            }).catch(error => {
                console.error(error)
            })
        } catch (error) {
            console.error(error)
        }
    } else {
        res.redirect('/')
    }
})

module.exports = router