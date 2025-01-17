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

router.post('/', (req, res, next) =>{
    Projects.insert({project_id: req.project_id, description: req.description,  notes: req.notes, completed: req.completed})
    .then(newProject =>{
        res.status(201).json(newProject)
    })
    .catch(next)
})

router.put('/:id', validateProjectId, validateProjectEdit, (req , res, next) => {
    Projects.update(req.params.id, { name: req.name, description: req.description, completed: req.completed, actions: req.actions})
    .then(() => {
       return Projects.get(req.params.id)
    })
    .then(change =>{
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