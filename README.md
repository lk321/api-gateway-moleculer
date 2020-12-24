# api-gateway-moleculer

API Gateway: microservice with nodejs and mongodb

## Installation

### Gateway
```sh
$ cd gateway && yarn install && yarn dev
```

### Node1 - Users
```sh
$ cd node1 && yarn install && yarn dev
```

### Node2 - Products
```sh
$ cd node2 && yarn install && yarn dev
```

### Import data to mongodb database (data folder)

Import with [MongoCompass](https://www.mongodb.com/products/compass) is too easy ;*


## APIs

- [Products with population](http://localhost:3000/api/products?populate=author)
- [API Postman 🤖](https://www.postman.com/collections/b7663f45388ec6ffa193)
## Dependencies

- [compression](https://ghub.io/compression): Node.js compression middleware
- [moleculer](https://ghub.io/moleculer): Fast &amp; powerful microservices framework for Node.JS
- [moleculer-db](https://ghub.io/moleculer-db): Moleculer service to store entities in database
- [moleculer-db-adapter-mongo](https://ghub.io/moleculer-db-adapter-mongo): MongoDB native adapter for Moleculer DB service.
- [moleculer-web](https://ghub.io/moleculer-web): Official API Gateway service for Moleculer framework

## Dev Dependencies

- [moleculer-repl](https://ghub.io/moleculer-repl): REPL module for Moleculer

## License

MIT
