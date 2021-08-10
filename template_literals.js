// Template Literals (Template String)
const person = {
  name: 'Julia',
  score: 4,
};

// bad code
console.log ( 'Hello' + person.name + ', Your current score is:' + person.score);

// good code
console.log(`Hello ${person.name}, Your current score is: ${person.score}`);

// good code
const { name, score } = person;
console.log(`Hello ${name}, Your current score is: ${score}`);

// good code
function greetings(person) {
  const { name, score } = person;
  console.log(`Hello ${name}, Your current score is: ${score}`);
}