
function partition1(arr, left, right){
    let pivot = arr[left];
    for(var i = left; i<= right; i++) {
        if (arr[i] < pivot) {
            [arr[i], arr[left]] = [arr[left], arr[i]]
            left++;
        } else if (arr[i] > pivot) {
            [arr[i], arr[right]] = [arr[right], arr[i]]
            right--;
            i--
        }
    }
    return i - 1;
}


function partition2(arr, left, right){
    let pivot = arr[right];
    for(var i = left; i< right; i++) {
        if (arr[i] < pivot) {
            [arr[i], arr[left]] = [arr[left], arr[i]]
            left++;
        }
    }
    [arr[left], arr[right]] = [arr[right], arr[left]]

    return left;
}

function partition3(arr, left, right){
    let pivot = arr[right];
    let pivotInd = right;
    while(left < right) {
        while(left < right && arr[left] <= pivot) {
            left++
        }
        while(left < right && arr[right] >= pivot) {
            right--;
        }
        [arr[left], arr[right]] = [arr[right], arr[left]]
    }
    [arr[left], arr[pivotInd]] = [arr[pivotInd], arr[left]]

    return left;
}


function QuickSort(arr, left, right) {
    if (left >= right ) return arr;

    let pivotInd = partition3(arr, left, right);
    QuickSort(arr, left, pivotInd - 1);
    QuickSort(arr, pivotInd + 1, right);
    return arr;
}

let list = [5,7,3,8,2,6,9,6,2,1,8,3,4]

QuickSort(list, 0, list.length -1)



function sort1(arr) {
    let left = 0;
    let right = arr.length -1;
    let curr = 0
    while(curr <= right) {
        console.log('')
        if(left < right && arr[curr] > 1) {
            [arr[curr], arr[right]] = [arr[right], arr[curr]]
            right--;
        } else if(left < right && arr[curr] < 1) {
            [arr[curr], arr[left]] = [arr[left], arr[curr]]
            curr++;
            left++;
        } else {
            curr++
        }
    }
    return arr;
}
