// add middlewares here related to projects
const express = require('express')
const Projects = require('./projects-model')

async function validateProjectId(req, res, next){
    try{
        const project = await Projects.get(req.params.id)
        if(!project){
            res.status(404).json({
                message: 'no such action'
            })
        } else{
            req.project = project
            next()
        }
     } catch(err){
        res.status(500).json({
            message: 'problem finding action'
        })
     }
}

function validateProject(req, res, next){

}

function validateProjectEdit(req, res, next){
    const { completed, description, name } = req.body
  if( !completed || !description || !name){
    res.status(400).json({
        message: 'missing required text field'
    })
  } else{
    req.completed = completed
    req.description = description.trim()
    req.name = name.trim()
    
    
    next()
  }
}

module.exports = {
    validateProject, validateProjectEdit, validateProjectId
}