// minimum

let firstName = 'Stanislav';

console.log(firstName);

let lastName = 'Gusak';

console.log(lastName);

let fullName = 'Stanislav Gusak';

console.log(fullName);

let myName = 'Stanislav';

console.log(myName);

// let 7message = 'Hello';

// let my-Name = 'Oleg';

// let class = 777;

// let first Name = 'Ivan';

// let n = 'Sergiy';

/* 
const myBirthsday = '05.10.89';
console.log(myBirthsday);
*/

let $user = 'Anna';

let _user = 'Irina';

let USER = 'Nikol';

let userName = 'Alyona';

let user_name = 'Andriy';

let user$name = 'Maxim';

let user777 = 'David';

let userNAME = 'Artem';

// norma

let userOne = prompt('What is your name?',['Name']);

alert(`Hello ${userOne}`);

let age = prompt('What is the date of birth?',[1980]);

const nowYear = 2023;

alert(`your age ${nowYear-age}, years`);

let long = prompt('What is the length of the square side? (sm)',[50])

alert(`The perimetr of the square is equal to ${long*4} (sm)`);

// maximum

let radius = prompt('what is the radius of the circle? (sm)',[30]);

const CONSTANTA = 3.14;

let power = (Math.pow(radius,2));

alert(`The area of the circle is equal to ${CONSTANTA*power} (sm)`);

let distance = prompt('what is the distance between the two cities? (km)',[20]);

let minutes = prompt('how much time do you need? (minutes)',[40]);

let hours = minutes/60;

let time = (hours.toFixed(1));

let speed = (Math.round(distance/time));

alert(`speed is equal to ${speed} km/h`);

const dollars = 40.585;

const euro = 41.255;

let result = ((dollars/euro).toFixed(3));

let sum = prompt('put dollars _$_',[100]);

alert(`take your money ${sum*result} _euro_`);









