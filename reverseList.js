// function for swapping two items in a list
function swapItems(items, firstIndex, secondIndex) {
    let temp = items[secondIndex];
    items[secondIndex] = items[firstIndex];
    items[firstIndex] = temp;
}

// function that reverses the elements in a list in-place
function reverseList(items) {
    const itemsLength = items.length;
    let lowIndex = 0;
    let highIndex = itemsLength - 1;

    while (lowIndex < highIndex) {
        swapItems(items, lowIndex, highIndex);
        lowIndex += 1;
        highIndex -= 1;
    }
    return items;
}

const listOfItems = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60];
const reversedList = reverseList(listOfItems);
console.log("reversedList", reversedList);