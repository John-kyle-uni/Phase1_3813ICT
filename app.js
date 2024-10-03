const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'my_app';
async function main() {
    await client.connect();
    console.log('Connected successfully');
    const db =client.db (dbName);
    const users = db.collection('users');
    const groups = db.collection('groups');
    
    return 'done.';
}
main()
    .then(console.log("main..."))
    .catch(console.error)
    .finally(() => client.close());