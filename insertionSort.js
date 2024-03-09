function insertion_sort(unsorted) {
    const unsortedLength = unsorted.length;
    let i = 1;

    while (i < unsortedLength) {
        let j = i;
        while (j > 0 && unsorted[j - 1] > unsorted[j]) {
            let temp = unsorted[j];
            unsorted[j] = unsorted[j - 1];
            unsorted[j - 1] = temp;
            j -= 1;
        }
        i += 1;
    }
    return unsorted;
}

console.log(insertion_sort([3, 6, 4, 1, 7, 0, 5, 8, 2, 9]));
