// Pull in dependencies
const router = require('express').Router();
const axios = require('axios');
const Bank = require('../models/Bank');


module.exports = router.get('/', async (req, res) => {
    try {
        const banks = await Bank.find();
        banks.forEach(async bank => {
            try {
                axios.get(bank.jwksUrl, {timeout: 300}).then(function (response) {
                    //console.log(response.data)
                    console.log(bank.jwksUrl +  ' ' + bank.name + ' ' + bank.owners +  ' ' + bank.bankPrefix);

                }).catch(function (error) {
                    //console.log(bank.jwksUrl +error.message);
                });
            } catch (e) {
                console.error(e.message);
            }
        }, Error)
    } catch (e) {
        console.log(e.message); }

})