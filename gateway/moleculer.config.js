const os = require("os")

module.exports = {
	namespace: "example",
	nodeID: (process.env.NODEID ? process.env.NODEID + "-" : "") + os.hostname().toLowerCase(),
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
	serializer: "JSON",
	requestTimeout: 10 * 1000,
	retryPolicy: {
		enabled: false,
		retries: 5,
		delay: 100,
		maxDelay: 1000,
		factor: 2,
		check: err => err && !!err.retryable
	},
	maxCallLevel: 100,
	heartbeatInterval: 10,
	heartbeatTimeout: 30,
	contextParamsCloning: false,
	tracking: {
		enabled: false,
		shutdownTimeout: 5000,
	},
	disableBalancer: false,
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
	metrics: {
		enabled: false,
		reporter: {
			type: "Prometheus",
			options: {
				port: 3030,
				path: "/metrics",
				defaultLabels: registry => ({
					namespace: registry.broker.namespace,
					nodeID: registry.broker.nodeID
				})
			}
		}
	},
	tracing: {
		enabled: false,
		exporter: {
			type: "Console",
			options: {
				logger: null,
				colors: true,
				width: 100,
				gaugeWidth: 40
			}
		}
	},
	middlewares: [],
	replCommands: null,
	// Called after broker created.
	created(broker) {

	},
	// Called after broker started.
	async started(broker) {

	},
	// Called after broker stopped.
	async stopped(broker) {

	}
};
