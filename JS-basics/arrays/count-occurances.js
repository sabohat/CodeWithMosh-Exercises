const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 2, 3, 2, 2, 2]

const count = countOccurances(numbers, 2)

console.log(count)

function countOccurances(array, element){
    return array.reduce((acc, num)=> acc += num === element ? 1 : 0, 0) //initialize  to 0 or it will start counting from the first element of the given array
}
//I am the best! I learned .reduce method :) ))))