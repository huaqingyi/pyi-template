import { isMaster, fork, on } from 'cluster';
import { Application } from './application';
import { cpus } from 'os';
import { createServer } from 'http';

if (isMaster) {
    Array.from({ length: cpus().length }).map((o, i) => {
        const worker = fork();
        worker.send({ id: i });
    });
    on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    process.on('message', (data) => {
        const { id } = data;

        const app = new Application();
        app.bootstrap(() => {
            console.log(`init worker: ${id}`);
            createServer(app.callback()).listen(app.config.port);
        });
    });
}
