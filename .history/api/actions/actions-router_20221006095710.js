// Write your "actions" router here!
const express = require('express');
const router = express.Router()
const actions = require('./actions-model')


router.get('/', (req, res, next) =>{
    actions.get()
    .then(action => {
        res.json(action)
        console.log('nice!')
    })
    .catch(next)
});

router.get('/:id', (req, res) =>{
    
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