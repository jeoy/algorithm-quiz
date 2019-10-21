function setTime(value, id) {
    return new Promise((resovle, reject) => {
        setTimeout(() => {
            console.log(value);
            resovle(id);
        }, 1000);
    });
}

function* a() {
    yield setTime('first', 1);
    yield setTime('second', 2);
    yield setTime('third', 3);
    console.log('done')
    return 'return 1234'
}

it = a();

function myAsyn() {
    return new Promise((resovle, reject) => {
        function next(data) {
            let {
                value,
                done
            } = it.next(data);
            if (!done) {
                value.then(res => {
                    next(res);
                })
            } else {
                resovle(value);
            }
        }
        next();
    });
}


async function aaa() {
    await setTime('first', 1)
    await setTime('second', 2)
    await setTime('third', 3)
    console.log('done')
    return 'return 1234'
}


function aaaP() {
    new Promise((res, rej) => {
        res(setTime('first', 1));
    }).then(() => {
        new Promise((res, rej) => {
            res(setTime('second', 2));
        }).then(() => {
            new Promise((res, rej) => {
                res(setTime('third', 3));
            }).then(() => {
                 console.log('done');
                 res('return 1234');
            })
        })
    })
}


console.log(aaa().then(res => {
    console.log(res);

    console.log(myAsyn().then(res => console.log(res)))
}))