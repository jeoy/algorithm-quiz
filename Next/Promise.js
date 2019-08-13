
class Promise {
    constructor(fn) {
        this.task = [];
        this.task.push(() => {
            fn(this.next.bind(this));
        });
        setTimeout(() => {
            this.next();
        });
    }

    then(fn) {
        this.task.push((value) => {
            let lastValue = fn(value);
            this.next(lastValue);
        });
        return this;
    }

    next(value) {
        if (this.task.length) {
            let currentTask = this.task.shift();
            currentTask(value);
        }
    }
}

new Promise((resolve) => {
    console.log(1235, this);
    setTimeout(() => {
        resolve(1235);
    }, 2000);
}).then((value) => {
    console.log('succeed1', value);
    return value + 1;
}).then((value) => {
    console.log('succeed2', value);
    return value + 1;
}).then((value) => {
    console.log('succeed3', value);
    return value + 1;
})

//
// new Promise((resolve) => {
//     console.log(22, this);
//     setTimeout(() => {
//         resolve(23);
//     }, 1000)
// }).then(() => {
//     console.log(24);
// })
