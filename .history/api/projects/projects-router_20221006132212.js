// Write your "projects" router here!
const express = require('express')
const router = express.Router();
const Projects = require('./projects-model')
const {validateProject, validateProjectId, validateProjectEdit } = require('./projects-middleware')


router.get('/', (req, res, next) => {
    Projects.get()
    .then(project => {
        res.json(project)
    })
    .catch(next)
});


router.get('/:id', validateProjectId, (req,res) =>{
   res.json(req.project)
})

router.post('/', (req, res) =>{

})

router.put('/:id', (req , res) =>{

})

router.delete('/:id', (req, res) =>{

})

router.get('/:id/actions', (req, res) =>{
    
})

module.exports = router