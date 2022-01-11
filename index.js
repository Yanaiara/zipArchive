const { Worker } = require("worker_threads");

const count = 20;
const initialDate = new Date();

const events = (worker, initialDate) => {
    worker.on("exit", () => {
        const finishDate = new Date();
        console.log((finishDate - initialDate).toLocaleString());
    })
}

for(i=0; i < count; i++){
    const worker = new Worker("./worker.js");
    events(worker, initialDate);
}