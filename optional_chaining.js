// Optional chaining
const bob = {
  name: 'Julia',
  age: 20,
};
const anna = {
  name: 'Julia',
  age: 20,
  job: {
    title: 'Software Engineer'
  },
};

// bad code
function displayJobTitle(person) {
  if (person.job && person.job.title) {
    console.log(person.job.title);
  }
}

// good code
function displayJobTitle(person) {
  if (person.job?.title) {
    console.log(person.job.title);
  }
}

function displayJobTitle(person) {
  const title = persion.job?.title ?? 'No Job Yet';
  console.log(title);
}