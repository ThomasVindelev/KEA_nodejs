const mongo = require("mongodb").MongoClient

const connectionUrl = "mongodb://localhost:27017"
const dbName = "animalfarm"

mongo.connect(connectionUrl, {useUnifiedTopology: true}, (error, client) => {
    if (error) {
        throw "Error connecting to mongodb " + error
    }

    const animalfarmDB = client.db(dbName)
    const buildings = animalfarmDB.collection("")

    buildings.updateOne({type: "pen"}, { $set: { type: ""}})
})