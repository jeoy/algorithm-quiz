class Queue {
    constructor() {
        this.list = []; // 队列
        this.index = 0; // 游标
    }

    next() {
        if (this.index >= this.list.length - 1) return;

        // 游标 + 1
        const cur = this.list[++this.index];
        cur(this.next);
    }

    // 添加任务
    add(...fn) {
        this.list.push(...fn);
    }

    // 执行
    run(...args) {
        const cur = this.list[this.index];
        typeof cur === 'function' && cur(this.next.bind(this));
    }

}

// 生成异步任务
const async = (x) => {
    return (next) => { // 传入 next 函数
        setTimeout(() => {
            console.log(x);
            next(); // 异步任务完成调用
        }, 1000);
    }
}

const q = new Queue();
const funs = '123456'.split('').map(x => async (x));
q.add(...funs);
q.run(); // 1, 2, 3, 4, 5, 6 隔一秒一个。
