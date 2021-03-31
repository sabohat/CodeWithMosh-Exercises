const numbers = arrayFromRange(10, 9)
console.log(numbers)

function arrayFromRange(min, max){
    let arr = []
    for (let i = min; i < max; i++){
        arr.push(i)
    }
    return arr
}