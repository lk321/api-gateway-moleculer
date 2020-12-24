
module.exports = {
	namespace: "example",
	nodeID: "node1",
	metadata: {},
	logger: {
		type: "Console",
		options: {
			colors: true,
			moduleColors: false,
			formatter: "full",
			objectPrinter: null,
			autoPadding: false
		}
	},
	logLevel: "info",
	transporter: "TCP",
	cacher: "Memory",
	requestTimeout: 10 * 1000,
	maxCallLevel: 100,
	heartbeatInterval: 10,
	heartbeatTimeout: 30,
	contextParamsCloning: false,
	registry: {
		strategy: "RoundRobin",
		preferLocal: true
	},
	circuitBreaker: {
		enabled: false,
		threshold: 0.5,
		minRequestCount: 20,
		windowTime: 60,
		halfOpenTime: 10 * 1000,
		check: err => err && err.code >= 500
	},
	bulkhead: {
		enabled: false,
		concurrency: 10,
		maxQueueSize: 100,
	},
	validator: true,
	errorHandler: null,
	middlewares: [],

	// Register custom REPL commands.
	replCommands: null,
};
