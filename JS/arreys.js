"use strict"

let milk = { 
    pName: 'Milk',
    price: 37,
    item: 1,
    bought: true,
    summa: function () { 
        return this.item * this.price;
    },
};
milk.summa()
milk.summa = milk.summa()
let bread = {
    pName: 'Bread',
    price: 25,
    item: 2,
    bought: false,
    summa: function () { 
        return this.item * this.price;
    },
};
bread.summa()
bread.summa = bread.summa()
let fruit = { 
    pName: 'Fruit',
    price: 73,
    item: 7,
    bought: true,
    summa: function () { 
        return this.item * this.price;
    },
};
fruit.summa()
fruit.summa = fruit.summa()
let chees = {
    pName: 'Chees',
    price: 97,
    item: 2,
    bought: false,
    summa: function () { 
        return this.item * this.price;
    },
};
chees.summa()
chees.summa = chees.summa()
 let water = { 
    pName: 'Water',
    price: 17,
    item: 6,
    bought: true,
    summa: function () { 
        return this.item * this.price;
    },
};
water.summa()
water.summa = water.summa()
const productList = [milk, bread, fruit, chees, water];
productList.forEach(elem => console.log(elem));
// ------------------------------------------------------------------------------------------------

// Показ продуктів що не придбані на початку списку
const list = [];
function showList() {
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].bought === false) {
            list.unshift(productList[i]);
        } else if (productList[i].bought === true) {
            list.push(productList[i]);
        }
    }
};
showList();
console.log(list);
// -------------------------------------------------------------------------------------------------

// Видалення продукту зі списку
const newProduct = []
let product = function (value) {
    productList.filter(elem => {
        if (elem.pName !== value) {
            return newProduct.push(elem);
        }
    });
};
product('Fruit')
console.log(newProduct)
// --------------------------------------------------------------------------------------------------

// Перевірка куплений продукт чи ні 
let value = 'Water';
const newArr = productList
    .filter(elem => elem.pName === value)
    .map(elem => {
        if (elem.bought === true) {
            return elem;
        }
    });
console.log(newArr);
// ==================================================================================================

// покупка продукту
const array = productList
    .filter(arr => arr.pName === value)
    .map(arr => {
        return {
            pName: value,
            bought: arr.bought
        }
    });
console.log(array);
// -----------------------------------------------------------------------------------------------------

