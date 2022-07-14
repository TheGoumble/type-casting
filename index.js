let num = 23
num = 45
//console.log(num + 2)

console.log(num + 2)
//cons.log(toText + 'texthere')

//num to string
const toText = String(num)
console.log(toText + 'text here')

//convert string to num
const myString = 'Boca Code'
const toNum = Number(myString)
console.log(toNum)
//cons.log(toNum)

//bool to num
console.log(Number(false))
console.log(Number(true))

//bool to string
const falseStr = String(false)
const trueStr = String(true)
const num2 = 2345
const numToString = num2.toString()


console.log(`first str ${falseStr} & second str ${trueStr} & ${numToString}`, true)

// check type
const str = '23'
const strType = typeof(str)
console.log(strType)

const num1 = 234
const numType = typeof(num1)
console.log(numType)


/* Boolenas */
 console.log(true == true)// exactly equals
 console.log(true == '43')// exactly
 console.log(true == 2)// exactly
 console.log('true' == true)

 console.log('true' === true)
 console.log(true === 'true')

 const checkNum = 100
 console.log(checkNum == true)


 const checkNum2 = 7 + 1 + 2.34
 //console.log(checkNum2 === true)

 console.log(checkNum2 && true)

 console.log(checkNum2 && false && false && true) // false and very bad practice

 console.log(checkNum2 || false) // 10.34
 console.log(undefined || false) // FALSE
 console.log(3 || false) // 3
 const nullNum = -0
 console.log(null || nullNum || 'test' && true) //

/* Comparisons */

let isEqual = 78 < 90
isEqual = 79 <= 78 // true
isEqual = 78 >= 100 // true
isEqual = 78 != 100  // false
console.log(isEqual)

