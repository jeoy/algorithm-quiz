// DeepClone

function deepClone(obj) {
    let result = {};
    let map = new Map()

    function deepCopyDFS(result, obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                let val = getCopy(obj[key]);
                result[key] = val;

                if (typeof val === 'object') {
                    if (!map.get(obj[key])) {
                        map.set(obj[key], obj[key]);
                        deepCopyDFS(val, obj[key]);
                    } else {
                        result[key] = map.get(obj[key])
                    }
                }
            }
        }
    }
    deepCopyDFS(result, obj)
    return JSON.stringify(result);
}

function getCopy(val) {
    if (Array.isArray(val)) {
        return [];
    }
    if (typeof val === 'object') {
        return {}
    }
    return val;
}

const obj1 = {
    a: 1,
    b: {
        c: {
            d: 2
        }
    },
    e: [1, 2, {
        f: 1
    }]
}


var a = {
    "name": "zzz"
};
var b = {
    "name": "vvv"
};
a.child = b;
b.parent = a;



console.log(deepClone(obj1))


const obj1 = {
    a: 1,
    b: {
        c: {
            d: 2
        }
    },
    f: undefined
}


const obj2 = {
    a: 1,
    b: {
        c: {
            d: 2
        }
    },
    e: [1, 2, {
        f: 1
    }]
}


function deepCompare(a, b) {
    let map = new Map();

    function deepCopyDFS(obj1, obj2) {
        let res = true;
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for (const key in obj1) {
            if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
                let val1 = obj1[key];
                let val2 = obj2[key];
                if (typeof val1 === 'object' && typeof val2 === 'object') {
                    res = res && deepCopyDFS(val1, val2)
                } else {
                    res = res && (val1 === val2);
                }
            } else {
                return false;
            }
        }
        return res;
    }
    return deepCopyDFS(a, b)
}

console.log(deepCompare(obj1, obj2))