"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cluster_1 = require("cluster");
const application_1 = require("./application");
const os_1 = require("os");
const http_1 = require("http");
if (cluster_1.isMaster) {
    Array.from({ length: os_1.cpus().length }).map((o, i) => {
        const worker = cluster_1.fork();
        worker.send({ id: i });
    });
    cluster_1.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
}
else {
    process.on('message', (data) => {
        const { id } = data;
        const app = new application_1.Application();
        app.bootstrap(() => {
            console.log(`init worker: ${id}`);
            http_1.createServer(app.callback()).listen(app.config.port);
        });
    });
}

//# sourceMappingURL=sourcemaps/cluster.js.map
