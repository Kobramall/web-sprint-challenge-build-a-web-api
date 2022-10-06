// add middlewares here related to actions
const actions = require('./actions-model')


async function validateActionId(req, res, next) {
    try {
        const action = await actions.get(req.params.id)
        if(!action) {
            res.status(404).json({
                message: 'no such action'
            })
        } else{
            req.action = action
            next()
        }
     } catch(err){
        res.status(500).json({
            message: 'problem finding action'
        })
     }
}

function validateAction(req, res, next){
  const { notes, description, project_id, completed } = req.body
  if(!notes || !description || !project_id || !completed){
    res.status(400).json({
        message: 'missing required text field'
    })
  } else{
    req.notes = notes.trim()
    req.description = description.trim()
    req.project_id = project_id
    req.completed = completed
    next()
  }
}

function validateActionEdit(req, res, next){
    const { notes, description, project_id } = req.body
  if(!notes || !description || !project_id){
    res.status(400).json({
        message: 'missing required text field'
    })
  } else{
    req.notes = notes.trim()
    req.description = description.trim()
    req.project_id = project_id
    next()
  }
}

module.exports = {
    validateAction, validateActionEdit, validateActionId
}