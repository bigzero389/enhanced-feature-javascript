// Spread object and array
const item = { type: '👔', size: 'M' };
const detail = { price: 20, made: 'Korea', gender: 'M' };

// bad code
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = item.price;
newObject['made'] = item.made;
newObject['gender'] = item.gender;

// good code
const shirt0 = Object.assign(item, detail);

const shirt = { ...item, ...detail };
const shirt = { ...item, ...detail, price: 40 };  // deatil 의 price 만 40 으로 변경

// spread syntax - array
let fruites = ['🍉', '🍊', '🍌']
// fruits.push('🍓')
fruits = [...fruites, '🍓']
// fruits.unshift('🍇')
fruits = ['🍇', ...fruites]

const fruits2 = ['🍉', '🍊', '🍌'];
let combined = fruits.concat(fruits2);
combined = [...fruits, ... fruits2];