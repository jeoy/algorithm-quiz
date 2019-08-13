class Dep {
    constructor() {
        this.subs = [];
    }
    addSubs(sub) {
        this.subs.push(sub);
    }
    notify() {
        this.subs.forEach(sub => {
            sub.update();
        })
    }
}

class Watcher {
    constructor(name) {
        this.name = name;
    }

    update() {
        console.log(this.name, 'updated!');
    }
}

let dep = new Dep();
let zhong = new Watcher('zhong');
let lan = new Watcher('lan')
dep.addSubs(zhong)
dep.addSubs(lan)


// dep.notify();


class Publish {
    constructor() {
        this.notifyCenter = {};
    }
    addEvent(event, subs) {
        if (!this.notifyCenter[event]) {
            this.notifyCenter[event] = []
        }
        this.notifyCenter[event].push(subs);
    }
    notify(event) {
        this.notifyCenter[event].forEach(sub => {
            sub.update();
        })
    }
}

class Sub {
    constructor(name) {
        this.name = name;
    }

    update() {
        console.log(this.name, 'updated!');
    }
}

let notfiCenter = new Publish();
zhong = new Watcher('zhong');
lan = new Watcher('lan')
notfiCenter.addEvent('new show', zhong)
notfiCenter.addEvent('new show', lan)
notfiCenter.addEvent('new moive', zhong)


notfiCenter.notify('new show');


var publisher = {
    publish(pubsub) {
        pubsub.publish()
    }
}
var pubsub = {
    subscribes: [],
    publish() {
        this.subscribes.forEach(subscribe => {
            subscribe.update();
        })
    },
    subscribe(sub) {
        this.subscribes.push(sub)
    }
}
var subscribe = {
    update() {
        console.log('update')
    },
    subscribe(pubsub) {
        pubsub.subscribe(this);
    }
}
subscribe.subscribe(pubsub)
publisher.publish(pubsub)