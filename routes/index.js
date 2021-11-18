const axios = require('axios')
const express = require('express')
const router = express.Router()
const actions = require('../methods/actions')


router.get('/', (req, res) => { res.render('getData') })

router.post('/calculate', (req, res) => {
    if (actions.validateCep(req.body.cep)) {
        incomeCapita = actions.calculateIncome(req.body.income, req.body.dependents)
        actions.showData(req.body.cep, incomeCapita, req.body.name, res)

    } else {
        res.redirect('/')
    }
})

module.exports = router