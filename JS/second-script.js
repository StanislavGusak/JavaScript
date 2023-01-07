// minimum
// exercise 1
let a = 0.1;

let b = 0.2; 

console.log(a + b);

console.log((a + b).toFixed(2));

// exercise 2
let c = '1';

let d = 2;

console.log(+c + d);

// exercise 3
const flesh = 820;

let size = prompt('specify the size of the flash in GB',[1]);

alert(`result ${((size*10**3)/flesh).toFixed(1)}`);

// norma 
// exercise 1
let sum = prompt('specify the sum of money in your wallet ($)',[10]);

let price = prompt('specify the price of chocolate',[3]);

alert(`you can buy ${Math.trunc(sum/price)}`);

alert (`your have ${sum%price}$ left`)

// exercise 2
let num = prompt('enter any three-digit number',[345]);

let x = num;
let y = 0;
for(; x; x = Math.floor(x / 10)) {
    y *= 10;
    y += x % 10;
}
alert(y);