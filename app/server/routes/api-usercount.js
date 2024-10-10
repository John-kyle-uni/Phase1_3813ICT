module.exports = function(db,app){
    app.get('/api/usercount' , function(req,res){
        if(!req.body) {
            return res.sendStatus(400)
        }
        const collection = db.collection('users');
        collection.find({}).count((err,count)=> {
            res.send({'count' :count});
        });
    });
}