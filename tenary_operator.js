///////////////// 삼항연산자 //////////////
// bad code
function getResult1(score) {
  let result;
  if (score > 5) {
    result = '👍';
  } else {
    result = '👎';
  }
  return result;
}

// good code
function getResult2(score) {
  return score > 5 ? '👍' : '👎';
}

console.log(getResult1(5));
console.log(getResult2(5));

