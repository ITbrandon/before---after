//Number
let beforeNumberVariable = document.querySelector('#before-number-value');
const numberVariable = document.querySelector('#number-value');

let initialNumber = 5.125456;

beforeNumberVariable.textContent = initialNumber

initialNumber++;

let fixedNumber = initialNumber.toFixed(2);

fixedNumber.toString();

numberVariable.textContent = fixedNumber;

//String
let beforeStringVariable = document.querySelector('#before-string-value');
const stringVariable = document.querySelector('#string-value');

let initialString = 'Hello, World';

beforeStringVariable.textContent = initialString;

let newString = initialString.replace('World', 'People');

const finalString = newString.slice(7);

stringVariable.textContent = finalString;

//Array
let beforeArrayVariable = document.querySelector('#before-array-value');
const arrayVariable = document.querySelector('#array-value');

const initialArray = [1, 2, 3, 4, 5];

beforeArrayVariable.textContent = initialArray;

initialArray.push(6);

initialArray.shift();

arrayVariable.textContent = initialArray;

//Object
let beforeObjectVariable = document.querySelector('#before-object-value');
const objectVariable = document.querySelector('#object-value');

let initialObject = { name: "Brandon", age: 21 };

beforeObjectVariable.textContent = Object.values(initialObject);

initialObject.name = "Boston";

initialObject.favoriteFood = "Pizza";

delete initialObject.age;

objectVariable.textContent = Object.values(initialObject);
