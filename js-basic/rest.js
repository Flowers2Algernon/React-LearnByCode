// use the spread operator to copy an array
const fruits = ['apple', 'banana', 'cherry'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

const fruitsAndBerries = [...fruits, ...berries];
console.log(fruitsAndBerries);

//Join objects
const flying = {wings: 2}
const car = {wheels: 4}

const flyingCar = {...flying, ...car}
console.log(flyingCar)

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

//convert a string to an array using the spread operator
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars);

//copy either an object or an array into a separate one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}
car1.speed = 201
console.log(car1.speed, car2.speed)

const fruits1 = ['apple', 'pear', 'plum']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, fruits2)