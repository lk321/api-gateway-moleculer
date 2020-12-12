const compression = require("compression")
const ApiGateway = require("moleculer-web")

module.exports = {
    name: "api",
    mixins: [ApiGateway],
    use: [compression()],
    settings: {
        port: process.env.PORT || 3000,
        routes: [{
            path: "/api",
            whitelist: [
                "**"
            ],
            aliases: {
                "GET /product/:id": "products.get"
            },
            autoAliases: true
        }],
        assets: {
            folder: "public"
        }
    }
}
