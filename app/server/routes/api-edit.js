module.exports = function(db,app,ObjectID){
    var result;
    app.post('/api/update', function(req,res){
        if(!req.body){
            return res.sendStatus(400)
        }
        user = req.body;

        var ObjectID = new ObjectID(user.objid);
        const collection  = db.collection('users');
        collection.updateOne({_id:objectid}, {$set:{name:user.name, email: user.email, role: user.role}} ,()=>{
            res.send({'ok':user.onjid});
        })
    });
}