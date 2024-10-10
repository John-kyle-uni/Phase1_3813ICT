module.exports = function(db,app,ObjectID){
    app.post('/api/deleteitem', function(req,res){
        if(!req.body) {
            return res.sendStatus(400);
        }
        userID = req.body.userID;

        var objectid = new ObjectID(userID);
        const collection = db.collection('users');

        collection.deleteOne({_id:objectid},(err,docs)=>{
            collection.find({}).toArray((err,data) => {
                res.send(data);
            });
        })
    })
}