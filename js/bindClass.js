class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    say() {
        console.log(this.name);
        console.log(this.age);
    }
}



Function.prototype.bind = function (newThis, ...args) {
    let argsTotal = []
    let fn = this;

    function F(...args2) {
        argsTotal.push(...args2);
        return new fn(...args.concat(argsTotal));
    };

    F.prototype = fn.prototype
    F.prototype.constructor = F;

    return F
};


var Dog = Animal.bind(null, 'dog');

var dog = new Dog(12);

console.log(dog instanceof Animal)
console.log(dog.constructor === Dog)
dog.say();