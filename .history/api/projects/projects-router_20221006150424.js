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

router.put('/:id', validateProjectId, validateProjectEdit, (req , res, next) =>{
    Projects.update(req.params.id, {description: req.description, project_id: req.project_id, completed: req.completed})
    .then(change => {
        res.json(change)
    })
    .catch(next)
})

router.delete('/:id', validateProjectId, async (req, res) =>{
    try{
        await Projects.remove(req.params.id)
        res.json(req.project)
    } catch (err){
        next(err)
    }
})

router.get('/:id/actions', validateProjectId, async (req, res, next) =>{
    try{
        const result = await Projects.getProjectActions(req.params.id) 
        res.json(result)
    } catch (err){
        next(err)
    }
})

module.exports = router