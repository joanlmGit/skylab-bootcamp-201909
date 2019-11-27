exports.index = (req, res) => {
    res.send({messege: "this is a logic post"})
        
}

exports.store = (req, res, next) => {
    try {
        res.send({messege: "The name is " + req.body.name});
    }catch (err){
        next(err)
        
    }
}
