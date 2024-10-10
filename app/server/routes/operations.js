const { MongoClient,ObjectId } = require("mongodb");


exports.insert = async function(req, res, client) {
    let doc = req.body;
    await client.connect();
    console.log("connected to database");
    let db = await client.db("my_app"),
        mycol = await db.collection("users");
    await mycol.insertOne(doc);
    console.log("user added");
    res.send(doc);
    client.close();
};

exports.find = async function(req, res, client) {
    let doc = req.body;
    await client.connect();
    console.log("connected to database");
    let db = await client.db("my_app"),
        mycol = await db.collection("users");
    const docs = await mycol.find({}).toArray();
    console.log("Found users");
    res.send(docs);
    client.close();
};
exports.update = async function(req, res, client) {
    console.log(req.body);
    await client.connect();
    let db = await client.db("my_app"),
        mycol = await db.collection("users");
    let queryJSON = req.body.query;
    let updateJSON = req.body,update;
    result = await db.collection("users").updateMany(queryJSON, {
        $set: updateJSON
    })
    console.log("user updated");
    res.send(result);
    client.close();
};
exports.delete = async function(req, res, client) {
    await client.connect();
    console.log("connected to database");
    let db = await client.db("my_app"),
        mycol = await db.collection("users");
    let queryJSON = req.body;
    console.log(queryJSON);
    console.log(ueryJSON._id);
    queryJSON._id = new ObjectId(queryJSON._id);
    console.log(ueryJson._id)
    let result = await mycol.deleteMany(queryJSON);
    console.log("deleted")
    res.send(queryJSON);
    client.close;
};
