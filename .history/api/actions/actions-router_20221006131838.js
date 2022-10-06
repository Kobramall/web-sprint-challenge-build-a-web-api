// Write your "actions" router here!
const express = require('express');
const router = express.Router()
const actions = require('./actions-model')
const { validateAction, validateActionId, validateActionEdit } = require("./actions-middlware")


router.get('/', (req, res, next) =>{
    actions.get()
    .then(action => {
        res.json(action)
    })
    .catch(next)
});

router.get('/:id', (req, res) =>{
    actions.findById(req.params.id)
    .then(action => {
        if(action){
        res.status(200).json(action)
        } else{
            res.status(404).json({ message: 'action not found'})
        }
    })
    .catch(error => {
        res.status(500).json({message: 'Error retrieving the action'})
    })
})

router.post('/', (req, res) =>{
    
})

router.put('/:id', (req, res) =>{
    
})

router.delete('/:id', (req, res) =>{
    
})

router.use((err, req, res, next) =>{
     res.status(err.status || 500).json({
        cusstomMessage: 'something tragic inside posts router happaned',
        err: err.message
     })
})

module.exports = router