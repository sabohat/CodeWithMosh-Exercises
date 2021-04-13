// Task: Writing a function which returns sum of varying number of parameters
// passed to the function.
//
// Skill: Use of REST operator

// Simple Sum
 function sum(...args) {
  const sum = args.reduce((a, b) => a + b)
   console.log(sum)
 }

 // Sum of numbers inside an array
function sumOfArrayItems(array) { // no need for REST operator
  const sum = array.reduce((a, b) => a + b)
  console.log(sum)
}

sumOfArrayItems([6, 7, 4, 2, 8, 0])
sum(2, 3, 4, 5, 5, 6, 7)
