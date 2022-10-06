// add middlewares here related to actions
const express = require('express')
const actions = require('./actions-model')


async function validateActionId(req, res, next) {
    try {
        const action = await actions.findById(req.params.id)
        if(!action) {
            res.status(404).json({
                message: 'no such action'
            })
        } else{
            req.actions = action
            next()
        }
     } catch(err){
        const action = await actions.getById(req.params.id)
        console.log(action)
        res.status(500).json({
            message: 'problem finding action'
        })
     }
}

function validateAction(req, res, next){

}

function validateActionEdit(req, res, next){
    
}

module.exports = {
    validateAction, validateActionEdit, validateActionId
}