// exercise 1
let age = prompt('How old are you?', 18);
if (age <= 11) {
    alert('Baby!');
} else if (age >= 12 && age <= 17) {
    alert('Teenager!');
} else if (age >= 18 && age <= 59) {
    alert('Adult!');
} else {
    alert('Pensioner!');
}


// exercise 2
let num = prompt('Enter 0-9');
if (num == 1) {
    alert('!');
} else if (num == 2) {
    alert('@');
} else if (num == 3) {
    alert('#');
} else if (num == 4) {
    alert('$');
} else if (num == 5) {
    alert('%');
} else if (num == 6) {
    alert('^');
} else if (num == 7) {
    alert('&');
} else if (num == 8) {
    alert('*');
} else if (num == 9) {
    alert('(');
} else {
    alert(')')
}


// exercise 3
let sum = 0;
let x = prompt('enter',[5]);
let y = prompt('enter',[15]);

for (let i=+x; i<=y; i++) {
    sum += i;
}
console.log('Сума всіх чисел в заданому діапазоні', sum);


// exercise 4
let a = prompt('enter', [12]);
let b = prompt('enter', [4]);

while (a !== 0 && b !== 0) {
    if (a > b) {
        a = a % b;
    } else {
        b = b % a;
    }
}
let divider = a + b;
console.log('Найбільший спільний дільник', divider);


// exercise 5
let n = prompt('enter any number', [45]);
let del;
for (let j = 1; j <= n; j++) {
    if (n % j == 0) {
        del = j;
    }
    console.log('Всі дільники заданого числа', del)
}


