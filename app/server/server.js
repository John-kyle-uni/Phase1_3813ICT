const express = require('express'),
    bodyParser = require('body-parser'),
     app = express(),
    {MongoClient} = require('mongodb'),
    client = new MongoClient('mongodb://localhost:27017');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var cors= require('cors');
app.use(cors());


async function main() {
    await client.connect();
    const db = client.db('my_app');
    const users = db.collection('users');
    const groups = db.collection('groups');
    require('./routes/api-add.js')(db,app);
    require('./routes/api-userCount.js')(db,app);
    require('./routes/api-validid.js')(db,app);
    require('./routes/api-getlist.js')(db,app);
    require('./routes/api-getitem.js')(db,app,ObjectID);
    require('./routes/api-update.js')(db,app,ObjectID);
    require('./routes/api-delete.js')(db,app,ObjectID);

    require('./listen.js')(http)

}
main()

// const users = require('../dbOperations/operations');
// app.post('/userInsert', (req, res) => {users.insert(req, res, client)});

// app.post('/userUpdate', (req, res) => {users.update(req, res, client)});

// app.post('/userDelete', (req, res) => {users.delete(req, res, client)});

// app.get('/userFind', (req, res) => {users.update(req, res, client)});

// const https = require('https'),
//     fs = require('fs'),
//     options = {
//         key: fs.readFileSync('key.pem'),
//         cert: fs.readFileSync('cert.pem')
//     },
//     Port = 3000,
//     httpsServer = https.createServer(options, app);

// httpsServer.listen(Port, () => {
//     console.log('Starting https server at: ${PORT}')
// });

//     function() 
//     { console.log("Server listening on port: 3000"); });

// app.post('/login', require('./router/postLogin')); 
// app.post('/loginafter', require('./router/postLoginafter'));