// Write a function `findLargestElement` that takes an array of numbers and returns the largest element.

function findLargestElement(numbers) {
    let largestNum = numbers[0];
    for (let i = 0; i < numbers.length ; i++) {
        if(numbers[i]>largestNum){
            largestNum = numbers[i];
        }        
    }
    return largestNum;
}

numbers = [2,3,5,9,7]
console.log(findLargestElement(numbers));