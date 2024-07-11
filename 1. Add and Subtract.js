function printNthElement(array) {
    let oldSum = 0;
    let newSum = 0;

    for (let i = 0; i < array.length; i++) {
        let curNum = Number(array[i]);
        oldSum += curNum;

        if (curNum % 2 === 0) {
            curNum += i;
        } else {
            curNum -= i;
        }
        array[i] = curNum
        newSum += curNum;
    }
    console.log(array);
    console.log(oldSum);
    console.log(newSum);
}
printNthElement(['5', '20', '31', '4', '20', '2']);
//printNthElement(['dsa', 'asd', 'test', 'test', '2']);
//printNthElement(['1', '2', '3', '4', '5', '6']);