function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}



function getRandomArray(length, max) {
    const arr = [];
    while (arr.length < length) {
        let value = generateRandomInteger(max);
        if (!arr.includes(value)) {
            arr.push(value);
        }
    }
    return arr;
}
