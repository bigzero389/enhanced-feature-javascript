///////////////// Nullish Coalescing Operator //////////////
// bad code
function printMessage1(text) {
  let message = text;
  if (text == null || text == undefined) {
    message = 'Nothing to display';
  }
  console.log(message);
}

// good code
function printMessage2(text) {
  const message = text ?? 'Nothing to display'
  console.log(message);
}

// cf : default parameter 를 사용하는 경우 null 처리가 안됨.
function printMessage3(text = 'Nothing to display') {
  console.log(text);
}

// cf : logical OR Operator => leftExpr(falsy) || rightExpr
function printMessage4(text) {
  // falsy => false, 0, -0, NaN, undefined, null, '', "", ``
  const message = text || 'Nothing to display'
  console.log(message);
}

/*
  const result = getInitialState() ?? fetchFromServer();
  console.log(result);

  function getInitialState() {
    return null;
  }

  function fetchFromServer() {
    return 'Hiya from ';
  }
*/

printMessage2('Hello');
printMessage2(undefined);
printMessage2(null);

printMessage3('Hello');
printMessage3(undefined);
printMessage3(null);

printMessage4('Hello');
printMessage4(undefined);
printMessage4(null);
printMessage4(0);
printMessage4('');