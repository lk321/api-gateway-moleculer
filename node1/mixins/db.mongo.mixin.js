const DbService = require("moleculer-db")
const MongoDbAdapter = require("moleculer-db-adapter-mongo")

module.exports = (collection) => {
    return {
        mixins: [DbService],
        adapter: new MongoDbAdapter("mongodb://localhost:27017/micro-service", { useNewUrlParser: true, useUnifiedTopology: true }),
        collection
    }
}