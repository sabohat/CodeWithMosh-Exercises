const numbers = [1, 2, 3, 4, 5, 6]

const output = move(numbers, 1, -1)

console.log(output)

function move(array, index, offset){
    
    const newIndex = index + offset

    if(newIndex > array.length || newIndex < 0) return console.error('Invalid offset')
    
    const copy = [...numbers]
    const value = copy.splice(index, 1)[0] //remove the target from the list
    copy.splice(newIndex, 0, value) //add the item to a new place
    return copy
}