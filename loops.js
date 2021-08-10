// Looping - Q : 짝수들만 각각 4를 곱한 전체합
const items = [1,2,3,4,5,6]

// bad code
const evens = getAllEvens(items);
const multiple = multiplyByFour(evens);
const sum = sumArray(multiple);
console.log(sum);

function getAllEvens(items) {
  const result = [];
  for (let i=0, j=items.length ; i<j ; i++) {
    if (items[i] % 2 === 0) {
      result.push(items[i]);
    }
  }
  return result;
}

function multiplyByFour(items) {
  const result = [];
  for (let i=0, j=items.length ; i<j ; i++) {
    result.push(items[i] * 4);
  }
  return result;
}

function sumArray(items) {
  let sum = 0;
  for (let i=0 , j=items.length ; i<j ; i++) {
    sum += items[i];
  }
  return sum;
}

// good code
function getAllEvens(items) {
  return items.filter(num => num % 2 === 0);
}

function multiplyByFour(items) {
  return items.map(num => num * 4);
}

function sumArray(items) {
  return items.reduce((a, b) => a + b, 0);
}

// good code final 1
const evens = items.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4);
const sum = multiple.reduce((a,b) => a + b, 0);
console.log(sum);

// good code final 2
const result = items
  .filter((num) => num % 2 === 0)
  .map((num) => num * 4)
  .reduce((a,b) => a + b, 0);
console.log(result);          