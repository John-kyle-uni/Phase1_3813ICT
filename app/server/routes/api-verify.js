module.exports = function(db,app){
    app.post('/api/verify' , function(req,res){
        if(!req.body){
            return res.sendStatus(400)
        }
        user = req.body;

        const collection = db.collection('users');

        collection.find({'id':user.id}).count((err,count)=>{
            if (count ==0){
                res.send({success:1,topnum:0});
            }else{
                collection.find({}, {sort: {id:-1}, limit: 1}).toArray(function(err,items){
                    res.send({success:0,topnum:users[0].id});
                });
            }
        });
    });
}