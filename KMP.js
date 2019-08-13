function BF(str, pat) {
    for (let i = 0; i < str.length - pat.length; i++) {
        if (str.slice(i, pat.length + i) === pat) {
            return i;
        }
    }
    return -1;
}

function getNext(str) {
    const next = [-1];
    let k = -1;
    let j = 0;
    let len = str.length;

    while (j < len - 1) {
        //p[k]表示前缀，p[j]表示后缀
        if (k == -1 || str[j] == str[k]) {
            ++j;
            ++k;
            //较之前next数组求法，改动在下面4行
            if (str[j] != str[k])
                next[j] = k; //之前只有这一行
            else
                //因为不能出现p[j] = p[ next[j ]]，所以当出现时需要继续递归，k = next[k] = next[next[k]]
                next[j] = next[k];
        } else {
            k = next[k];
        }
    }

    return next;

}

function compare(ori, tar) {
    if (ori === tar) {
        return null;
    } else {
        for (let i = 0; i < ori.length; i++) {
            if (ori[i] !== tar[i]) {
                return i;
            }
        }
    }
}

function KMP(str, pat) {
    let next = getNext(pat);
    let i = 0;
    while (i < str.length - pat.length) {
        console.log('比较串', str.slice(i, pat.length + i));
        let misInd = compare(str.slice(i, pat.length + i), pat);
        if (misInd === null) {
            return i;
        } else {
            let len = misInd - next[misInd];
            console.log('移动距离', len);
            i += len;
        }
    }
}




console.log(KMP('acabaabaabcaccaabc', 'abaabcac'));