// Task: Writing a function which returns sum of varying number of parameters
// passed to the function.
//
// Skill: Use of REST operator

// Simple Sum
 function sum(...args) {
  const sum = args.reduce((a, b) => a + b)
   console.log(sum)
   return sum
 }

 // Sum of numbers inside an array
function sumOfArrayItems(arr) { // no need for REST operator
  const sum = arr.reduce((a, b) => a + b)
  console.log(sum)
  return sum
}
// Second method for finding the sum of array of values
function sumOfArrayValues(...arr) { // no need for REST operator
  if (arr.length === 1 && Array.isArray(arr[0]))
    arr = [...arr[0]] // Spread operator
  const sum = arr.reduce((a, b) => a + b)
  console.log(sum)
  return sum
}

sumOfArrayItems([6, 7, 4, 2, 8, 0])
sum(2, 3, 4, 5, 5, 6, 7)
sumOfArrayValues([6, 7, 4, 2, 8, 0])
