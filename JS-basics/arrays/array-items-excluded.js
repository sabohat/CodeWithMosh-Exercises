const numbers = [1, 2, 3, 4, 1, 1]

const output = except(numbers, [2, 3])

console.log(output)

function except(array, excluded){
    return array.filter(item =>  excluded.includes(item) ? '': item)
}