const validate=require('../../utils/validate')
const database=require('../../utils/database')
const {NotFoundError, ConflictError}=require('../../utils/errors')
const {objectId}=database



module.exports=function(id,taskId, title, description, status){
    validate.string(id)
    validate.string.notVoid('id',id)

    if (!objectId.isValid(taskId)) throw new ContentError (`${taskId} is not valid id`)

    if (title){
        validate.string(title)
        validate.string.notVoid('title',title)
    }

    if (description) {
        validate.string(description)
        validate.string.notVoid('descriptio',description)
    }

    if (status)
}