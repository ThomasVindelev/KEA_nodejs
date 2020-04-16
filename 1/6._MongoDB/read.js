const mongo = require("mongodb").MongoClient

const connectionUrl = "mongodb://localhost:27017"
const dbName = "animalfarm"

mongo.connect(connectionUrl, {useUnifiedTopology: true}, (error, client) => {
    if (error) {
        throw "Error connecting to mongodb " + error
    }

    const animalFarm = client.db(dbName)
    const buildings = animalFarm.collection("buildings")
    console.log(animalFarm)
    console.log(buildings.find({type: {$exists: true}}).toArray((error, foundBuildings) => {
        console.log(foundBuildings)
        client.close()
    }))

})

