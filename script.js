//1-vazifa
let arr1 = [1, 2, 3, 4, 5, 7];
let arr2 = [2, 3, 4, 6, 7, 4, 5];

let diff = arr2.filter(num => !arr1.includes(num));
console.log(diff); 
//2-vazifa
function isValidParentheses(str) {
     let count = 0;
   
     for (let char of str) {
       if (char === '(') {
         count++;
       } else if (char === ')') {
         count--;
       }
   
       if (count < 0) {
         return false;
       }
     }
   
     return count === 0;
   }
   
   console.log(isValidParentheses('()()'));
   
//3-vazifa
function alternateCase(str) {
     return str.split('').map((char, index) =>
       index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
     ).join('');
   }
   
   let result = alternateCase("Bugun ob-havo sovuq va yomg'irli");
   console.log(result); 
//4-vazifa
let array1 = [1, 2, 3, 4];
let array2 = [2, 3, 5, 6];

let uniqueNumbers = array1.filter(num => !array2.includes(num))
.concat(array2.filter(num => !array1.includes(num)));

console.log(uniqueNumbers); 
//5-vazifa
let mixedArray = [3, 'apple', 2, 'banana', 1];

let sortedArray = mixedArray.filter(el => typeof el === 'number').sort((a, b) => a - b)
  .concat(mixedArray.filter(el => typeof el === 'string').sort());

console.log(sortedArray);
//6-vazifa
let arr = [1, 2, 3, 4, 5, 6];
let subArrays = [];

for (let i = 0; i < arr.length; i += 2) {
  subArrays.push(arr.slice(i, i + 2));
}

console.log(subArrays);  

//7-vazifa
let colors = ['red', 'blue', 'red', 'green', 'blue', 'green', 'red'];

let colorCount = {};
let pairedCount = 0;

colors.forEach(color => {
  colorCount[color] = (colorCount[color] || 0) + 1;
  if (colorCount[color] % 2 === 0) {
    pairedCount++;
  }
});

console.log(colorCount); 

