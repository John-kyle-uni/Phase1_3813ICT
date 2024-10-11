const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const io = require('socket.io')(http,{
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
  }
});
app.use(cors({
  origin: 'http://localhost:4200', 
  methods: ['GET', 'POST'],       
  credentials: true
}));

// --------------------------------------
const {MongoClient, ObjectID} = require('mongodb'),
client = new MongoClient('mongodb://localhost:27017');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//---------------------------------------

const sockets = require('./sockets.js')
const server = require('./listen.js')



const PORT = 3000;
const dbName = 'my_app'

// -------------------------------------------------------
async function main() {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('users');
  require('./routes/api-add.js')(db,app)
  require('./routes/api-delete.js')(db,app)
  require('./routes/api-edit.js')(db,app)
  require('./routes/api-getlist.js')(db,app)
  // require('./routes/api-getone.js')(db,app);
  require('./routes/api-usercount.js')(db,app)
  require('./routes/api-verify.js')(db,app)

}
// --------------------------------------------------------
 
sockets.connect(io, PORT);

server.listen(http,PORT);

main();
