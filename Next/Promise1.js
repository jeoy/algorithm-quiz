class Promise {
    constructor(fn) {
        this.task = [];
        this.task.push(() => {
            fn(this.resolve.bind(this), this.reject.bind(this));
        });
        setTimeout(() => {
            let currentTask = this.task.shift();
            currentTask();
        });
    }

    then(resolveFn, rejectFn) {
        this.task.push({
            resolve: (value) => {
                let lastValue = resolveFn(value);
                this.resolve(lastValue);
            },
            reject: (value) => {
                let lastValue = rejectFn(value);
                this.reject(lastValue);
            }
        });

        return this;
    }

    resolve(value) {
        if (this.task.length) {
            let currentTask = this.task.shift();
            currentTask.resolve(value);
        }
    }

    reject(value) {
        if (this.task.length) {
            let currentTask = this.task.shift();
            currentTask.reject(value);
        }
    }
}

new Promise((resolve, reject) => {
    console.log(1235, this);
    setTimeout(() => {
        reject(1235);
    }, 2000);
}).then((value) => {
    console.log('succeed1', value);
    return value + 1;
}, err => {
    console.log('failed1', err);
    return err;
}).then((value) => {
    console.log('succeed2', value);
    return value + 1;
}).then((value) => {
    console.log('succeed3', value);
    return value + 1;
})


// new Promise((resolve) => {
//     console.log(22, this);
//     setTimeout(() => {
//         resolve(23);
//     }, 1000)
// }).then((value) => {
//     console.log('2 succeed2', value);
//     return value + 1;
// })
