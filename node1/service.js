const MongoDbService = require("./mixins/db.mongo.mixin")

module.exports = {
    name: "users",
    mixins: [MongoDbService("users")],
    settings: {
        JWT_SECRET: process.env.JWT_SECRET || "jwt-secret",
        fields: ["_id", "name", "last_name", "email", "password"],
        entityValidator: {
            name: { type: "string" },
            last_name: { type: "string" },
            email: { type: "email" },
            password: { type: "string", min: 6 }
        }
    }

}
