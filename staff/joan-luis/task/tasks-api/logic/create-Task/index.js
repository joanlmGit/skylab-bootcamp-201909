const validate=require('../../utils/validate')
const {NotFoundError}=require('../../errors')
const database =require('../../utils/database')
const {objectId}=database

module.exports= function (id, title, description){
    validate.string(id)
    validate.string.notvoid('id', id)
    validate.string(title)
    validate.string.notvoid('title', title)
    validate.string(description)
    validate.string.notvoid('description', description)

    const client= database

    return client.connect()
        .then(connection =>{
            const db=connection.db()

            users=db.collection('users')
            task=db.collection('task')

            return users.findOne({_id: objectId(id)})
                .then(user =>{
                    if (!user) throw new NotFoundError (`user with id ${id} not found`)

                    const task={
                        user=objectId(id),
                        title,
                        description,
                        status: 'TODO',
                        date: new date
                    }

                    return task.insertOne(task)
                })
                .then(result => {
                    if (!result.insertedCount) throw new Error(`failed to create a task`)

                    return result.insertedId.toString()
                })


        })
}