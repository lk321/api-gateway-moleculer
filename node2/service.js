const MongoDbService = require("./mixins/db.mongo.mixin")

module.exports = {
    name: "products",
    mixins: [MongoDbService("products")],
    settings: {
        JWT_SECRET: process.env.JWT_SECRET || "jwt-secret",
        fields: ["_id", "name", "category", "price", "quantity", "author"],
        entityValidator: {
            name: { type: "string", min: 5 },
            category: { type: "string", items: ["phones", "tables", "phablets"], optional: true },
            price: { type: "number", positive: true },
            quantity: { type: "number", positive: true }
        },
        populates: {
            author: "users.get"
        }
    }
}
