function MyObject() {

    // 私有变量和私有函数

    var privateVariable = {
        a: 10
    };

    function privateFunction() {
        return false;
    }

    this.publicMethod = function () {
        privateVariable.a++;
        return privateFunction();
    };

    this.printPrivateVariable = function() {
        console.log(privateVariable.a);
        return privateVariable;
    }

}


var obj1 = new MyObject();
obj1.publicMethod();
obj1.publicMethod();
obj1.publicMethod();
obj1.printPrivateVariable()


var obj2 = new MyObject();
obj2.publicMethod();
obj2.printPrivateVariable()

console.log(obj1.printPrivateVariable === obj2.printPrivateVariable)