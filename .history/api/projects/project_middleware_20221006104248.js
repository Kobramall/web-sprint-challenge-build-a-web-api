const Projects = require('./projects-model')

async function validateProjectId(req, res, next){
    try{
        const project = await Projects.getById(req.params.id)
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
    
}