var arr = [1, 5, 2, 4, 3]

function insertionSort(arr) {
    var len = arr.length,
        index, current
    for (var i = 1; i < len; i++) {
        index = i - 1
        current = arr[i]
        while (index >= 0 && arr[index] > current) {
            arr[index + 1] = arr[index]
            index--
        }
        if (index + 1 != i) {
            arr[index + 1] = current;
        }
    }
    return arr
}

console.log(insertionSort(arr))
