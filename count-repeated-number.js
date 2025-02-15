/**
 * You are given an array of numbers. Count how many times 
 * the a number is repeated in the array.
sample-input: numbers = [5,6,11,12,98, 5]
find: 5 output: 2
sample-input:
numbers = [5,6,11,12,98, 5]
find: 25 output: 0
 * 
 */

const numbers = [5,6,11,12,98, 5]

function countRepeatedNumberOfArray(arr,num){
    let count = 0
    for(const number of arr){
        if(number === num){
            count += 1
        }
    }
    return count
}

const countNumber = countRepeatedNumberOfArray(numbers,25)

console.log(countNumber)