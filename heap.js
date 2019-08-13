arr = [6,3,4,6,1,2];

var minHeap = [null,1,3,2,5,6,4,7,10];


function insert(heap, x) {
    console.log('insert');
    heap.push(x);
    swim(heap, heap.length -1);
    return heap;
}

function swim(heap, k) {
    while (k > 1 && heap[k] < heap[parseInt(k/2)]) {
        [heap[k], heap[parseInt(k/2)]] = [heap[parseInt(k/2)], heap[k]];
        k = parseInt(k/2);
    }
}


function sink(heap, k) {
    console.log('sink');
    while (2 * k < heap.length) {
        j = 2*k;
        if (heap[j] > heap[j+1]) {
            j++
        }
        if (heap[k] > heap[j]) {
            [heap[k], heap[j]] = [heap[j], heap[k]];
            k = j;
        } else {
            break;
        }
    }
    return heap;
}

function delMax(heap) {
    [heap[1], heap[heap.length -1]] = [heap[heap.length -1],heap[1]];
    let result = heap.pop();
    sink(heap, 1);
    return result;
}


var arr = [6,3,9,2,6,3,1,8,9,3];

function heapSort(arr) {
    heap = [null];
    arr.forEach(i => {
        insert(heap, i);
    });
    console.log('heap ', heap);
    let result = []
    while(heap.length > 1) {
        result.push(delMax(heap));
    }

    return result;
}
