// Object Destructuring
const person = {
  name: 'Julia',
  age: 30,
  phone: '01077777777'
};

// bad code
function displayPerson(person) {
  displayAvatar(person.name);
  displayName(person.name);
  displayProfile(person.name, person.age);
}

// good code
function displayPerson(person) {
  const { name, age } = person;
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}