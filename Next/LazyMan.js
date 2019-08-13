// LazyMan(“Hank”)输出:
// Hi! This is Hank!
//
// LazyMan('“Hank”').sleep(10).eat('“dinner”')
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~
//
// LazyMan('“Hank”').eat(“dinner”).eat('“supper”')
// Hi This is Hank!
// Eat dinner~
// Eat supper~
//
// LazyMan('“Hank”').sleepFirst(5).eat('“supper”')输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper


class _LazyMan {
    constructor(name) {
        this.name = name;
        this.event = []
        this.event.push(() => {
            console.log(`Hi This is ${name}!`);
            this.next();
        })
        setTimeout(this.next.bind(this), 0)

        return this;
    }

    eat(food) {
        this.event.push(() => {
            console.log(`Eat ${food}~`);
            this.next();
        });
        return this;
    }

    sleep(time) {
        this.event.push(() => {
            console.log(`Sleeping....`);
            setTimeout(() => {
                console.log(`Wake up after ${time}~`);
                this.next();
            }, time * 1000);
        });
        return this;
    }

    sleepFirst(time) {
        this.event.unshift(() => {
            console.log(`Sleep....`);
            setTimeout(() => {
                console.log(`Wake up after ${time}~`);
                this.next();
            }, time * 1000);
        });
        return this;
    }

    next() {
        if (this.event.length) {
            let nowDo = this.event.shift();
            nowDo();
        }
    }
}

function LazyMan(name) {
    return new _LazyMan('“Hank”')
}
LazyMan('“Hank”').sleepFirst(2).eat('“supper”').sleep(3).eat('“dinner”').sleep(1).eat('KFC')
