const numbers = [1, 2, 3, 4, 6, 1, 2, 4]

const max1 = getMaxwithSort(numbers)
const max2 = getMaxwithReduce(numbers)

console.log(max1)
console.log(max2)

//method 1
function getMaxwithSort(array){
    if(array.length === 0) return undefined

    return array.sort()[array.length-1]
}

//method 2
function getMaxwithReduce(array){
    if(array.length === 0) return undefined
    
    return array.reduce((acc, val) => (acc > val) ? acc : val)
}