// module.exports = function(db,app){
//     app.post('/api/add', function(req,res){
//         if(!req.body) {
//             return res.sendStatus(400) 
//         }
//         user = req.body;
//         const collection = db.collection('users');

//         collection.find({'id': user.id}).count((err,count)=>{
//             if (count ==0) {
//                 collection.insertOne(user,(err,dbres) => {
//                     if(err) throw err;
//                     let num = dbres.insertedCount;

//                     res.send({'num' : num,err:null});
//                 })
//             }else{
//                 res.send({num:0,err:"user already listed"});
//             }
//         });
//     });
// }

module.exports = function(db, app) {
    app.post('/api/add', (req, res) => {
        if (!req.body) {
            return res.status(400).send('No request body');
        }

        const user = {
            id: req.body.id,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            roles: req.body.roles,
        };

        // Insert the new user into the MongoDB collection
        db.collection('users').insertOne(user, (err, result) => {
            if (err) {
                return res.status(500).send('Error inserting user');
            }

            res.status(200).send({ success: true, message: 'User added successfully' });
        });
    });
};
