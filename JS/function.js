let myName;
function argument() {
    myName = 'Stanislav';
    let message = 'hello ' + myName;
    console.log(message);
}
argument()


function user() {
    let userName = 'Maxim';
    let age = 33;
    console.log(userName, + age, 'years old');
}
user()


// Функція повертає задане число
// ----------------------------------------------------------------------------------->>>>>>>>>
function twoNumber(num1, num2) {
    num1 = 35;
    num2 = 17;
    if (num1 < num2) {
        console.log(-1);
    } else if (num1 > num2) {
        console.log(1);
    } else {
        console.log(0)
    }
}
twoNumber()

// Факторіал числа
// ----------------------------------------------------------------------------------->>>>>>>>>
function fuctorial(n) {
    n = 11;
    let multi = 1;
    for (let i = 1; i <= n; i++) {
        multi *= i;
    }
    console.log(multi)
}
fuctorial()

// Вивести трьохзначне число
// ------------------------------------------------------------------------------------>>>>>>>>
function myNumbers() {
   let result = '';
   for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
   }
   return result;
}
myNumbers()
console.log(myNumbers(1,4,9))



// Знаходження площи прямокутника або квадрата
// -------------------------------------------------------------------------------------->>>>>>>>
function funSquare(height, width) {
    let square = (height * width);
    if (width === undefined) {
        console.log(square = height ** 2);
    } else {
        console.log(square);
    }
}
funSquare(20, 15)


// Досконале число
// ------------------------------------------------------------------------------------->>>>>>>>>
let sum = 0;
let div;
function perfect(num) {
    for (let i = 0; i < num - 1; i++) {
        div = num % i;
        if (div === 0) {
            sum += i;
        }
    }
    if (num === sum) {
        console.log(num, 'досконале число')
    }else {
        console.log(num, false)
    }
}
perfect(28)


