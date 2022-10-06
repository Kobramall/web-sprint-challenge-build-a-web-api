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
  const { name, description } = req.body
  if(name || description){
    res.status(400).json({
        message: 'missing required text field'
    })
  } else{
    req.name = name.trim()
    req.description = description.trim()
    next()
  }
}

function validateActionEdit(req, res, next){
    
}

module.exports = {
    validateAction, validateActionEdit, validateActionId
}