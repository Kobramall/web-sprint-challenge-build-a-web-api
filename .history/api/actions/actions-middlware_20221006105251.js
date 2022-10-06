// add middlewares here related to actions
const Actions = require('./actions-model')


async function validateActionId(req, res, next){
     try{
        const action = await Actions.getById(req.params.id)
        if(!action){
            res.status(404).json({
                message: 'no such action'
            })
        } else{
            req.actions = action
            next()
        }
     } catch(err){
        res.status(500).json({
            message: 'problem finding action'
        })
     }
}

function validateAction(req, res, next){

}

function validateActionEdit(req, res, next){
    
}

module.exports = {
    validateAction, validateActionEdit, validateActionId
}