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

router.get('/:id',  validateActionId, (req, res) =>{
    res.json(req.action)
})

router.post('/',  validateAction, (req, res) =>{
    actions.insert({notes: req.notes, description: req.description, project_id: req.project_id})
})

router.put('/:id', validateActionId, validateActionEdit, (req, res, next) =>{
    actions.update(req.params.id, {notes: req.notes, description: req.description, project_id: req.project_id, completed: req.completed})
    .then(change => {
        res.json(change)
    })
    .catch(next)
})

router.delete('/:id', validateActionId,  async (req, res) =>{
    try{
        await actions.remove(req.params.id)
        res.json(req.action)
    } catch (err){
        next(err)
    }
})

router.use((err, req, res, next) =>{
     res.status(err.status || 500).json({
        cusstomMessage: 'something tragic inside posts router happaned',
        err: err.message
     })
})

module.exports = router