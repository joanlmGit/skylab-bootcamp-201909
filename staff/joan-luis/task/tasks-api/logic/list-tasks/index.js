const {validate, errors: {NotFoundError, ContentError}} = require('task-util')
const { ObjectId, models: { User, Task } } = require('tasks-data')


module.exports = function (id) {
    validate.string(id)
    validate.string.notVoid('id', id)
    if (!ObjectId.isValid(id)) throw new ContentError(`${id} is not a valid id`)

    return (async ()=>{
        const user= await User.findById(id)
        
        if (!user) throw new NotFoundError(`user with id ${id} not found`)

        await Task.updateMany({ user: id }, { $set: { lastAccess: new Date } })
        
        const task= await Task.find({ user: id }).lean()
        
        tasks.forEach(task => {
            task.id = task._id.toString()
            delete task._id

            task.user = id
        })

        return tasks
    })()      
}