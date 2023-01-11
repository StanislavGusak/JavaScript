// minimum
// exercise 1
let a = 0.1;
let b = 0.2; 
let p = Number(a + b).toFixed(1)
console.log(+p);

// exercise 2
let c = '1';
let d = 2;
let e = (+c + d)
console.log(e);

// exercise 3
const flesh = 820;
let size = prompt('Введіть розмір флешки в GB',[1]);
let result = ((size*10**3)/flesh).toFixed(1)
console.log('Можна помістити', result, 'файлів розміром 820 mb' );

// norma 
// exercise 1
let sum = prompt('Введіть суму в вашому гаманці (грн)',[10]);
let price = prompt('Введіть ціну однієї шоколадки',[3]);
let item = Math.trunc(sum / price);
console.log('Ви можете купити', item, 'шоколадок');
let sumInner = (sum % price)
console.log('У вас залишиться', sumInner, 'грн')

// exercise 2
let num = prompt('Введіть будь яке трьохзначне число', [345]);
let x = num;
let y = 0;
for(; x; x = Math.floor(x / 10)) {
    y *= 10;
    y += x % 10;
}
console.log('Число задом на перед', y);