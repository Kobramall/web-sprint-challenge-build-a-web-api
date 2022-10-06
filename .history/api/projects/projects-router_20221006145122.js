// Write your "projects" router here!
const express = require('express')
const router = express.Router();
const Projects = require('./projects-model')
const actions = require('./projects-model')
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

router.put('/:id', validateProjectId, (req , res) =>{

})

router.delete('/:id', validateProjectId, async (req, res) =>{
    try{
        await Projects.remove(req.params.id)
        res.json(req.project)
    } catch (err){
        next(err)
    }
})

router.get('/:id/actions', async (req, res) =>{
    try{
        const result = await Projects.getProjectActions(req, res, next) 
        res.json(result)
    } catch (err){
        next(err)
    }
})

module.exports = router