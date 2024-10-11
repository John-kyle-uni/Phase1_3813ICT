module.exports = function(db, app) {
    app.get('/api/getone/:id', (req, res) => {
        const userId = req.params.id;
        const collection = db.collection('users');
        
        collection.findOne({ id: userId }, (err, user) => {
            if (err) {
                return res.status(500).send('Error fetching user');
            }
            if (!user) {
                return res.status(404).send({ success: false, message: 'User not found' });
            }
            res.status(200).send(user); 
        });
    });
};
