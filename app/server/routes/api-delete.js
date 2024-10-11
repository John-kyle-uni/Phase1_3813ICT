// module.exports = function(db,app,ObjectID){
//     app.post('/api/deleteitem', function(req,res){
//         if(!req.body) {
//             return res.sendStatus(400);
//         }
//         userID = req.body.userID;

//         var objectid = new ObjectID(userID);
//         const collection = db.collection('users');

//         collection.deleteOne({_id:objectid},(err,docs)=>{
//             collection.find({}).toArray((err,data) => {
//                 res.send(data);
//             });
//         })
//     })
// }

module.exports = function(db, app) {
    app.delete('/api/delete/:id', (req, res) => {
        const userId = req.params.id;
        const collection = db.collection('users');
        
        // Delete the user by their ID
        collection.deleteOne({ id: userId }, (err, result) => {
            if (err) {
                return res.status(500).send('Error deleting user');
            }
            if (result.deletedCount === 0) {
                return res.status(404).send({ success: false, message: 'User not found' });
            }
            res.status(200).send({ success: true, message: 'User deleted successfully' });
        });
    });
};