const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main(){

    const uri = 'mongodb://localhost:27017';
    var users = [
        {ID:"1", username:"super", password: "123", email: "super@email.com", roles: "admin"},
        {ID:"2", username:"admin", password: "123", email: "admin@email.com", roles: "admin"},
        {ID:"3", username:"user1", password: "123", email: "user1@email.com", roles: "user"},
        {ID:"4", username:"andy", password: "123", email: "andy@email.com", roles: "user"},
    ]

    try 
    {
        await client.connect();
        const database = client.db("my_app");
        const collection = database.collection("users");
        const add = await collection.insertMany(users);
        console.log("collection added")
    
    } catch 
    {
        console.error("hello");
    } finally {
        await client.close();
    }

}
main().catch(console.error);
