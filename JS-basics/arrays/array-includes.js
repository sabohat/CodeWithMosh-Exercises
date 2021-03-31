const numbers = [1, 2, 3, 5, 6]
console.log(includes1(numbers, 1))
console.log(includes2(numbers, 3))

//method 1
function includes1(array, searchElement){
    return numbers.some(num => num === searchElement)
}

//method 2
function includes2(array, searchElement){
    for (let item of array)
        if (item === searchElement) return true
    
    return false
}