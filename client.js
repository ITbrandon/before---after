//Number
const numberVariable = document.querySelector('#number-value');

let initialNumber = 5.125456;

initialNumber++;

let fixedNumber = initialNumber.toFixed(2);

fixedNumber.toString();

numberVariable.textContent = fixedNumber;

//String
const stringVariable = document.querySelector('#string-value');

let initialString = 'Hello, World';

let newString = initialString.replace('World', 'People');

const finalString = newString.slice(7);

stringVariable.textContent = finalString;

//Array
const arrayVariable = document.querySelector('#array-value');

const initialArray = [1, 2, 3, 4, 5];

initialArray.push(6);

initialArray.shift();

arrayVariable.textContent = initialArray;

//Object
const objectVariable = document.querySelector('#object-value');

let initialObject = { name: "Brandon", age: 21 };

initialObject.favoriteFood = "Pizza";

delete initialObject.age;

objectVariable.textContent = Object.values(initialObject);
