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
  const { action } = req.body
  console.log(action)
  if(!action || !action.trim()){
    res.status(400).json({
        message: 'missing required text field'
    })
  } else{
    req.action = action.trim()
    next()
  }
}

function validateActionEdit(req, res, next){
    
}

module.exports = {
    validateAction, validateActionEdit, validateActionId
}