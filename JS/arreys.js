
const productList = [
    { name: 'milk', price: 37, item: 1, bought: true },
    { name: 'bread', price: 25, item: 2, bought: false },
    { name: 'fruit', price: 73, item: 7, bought: true },
    { name: 'chees', price: 280, item: 2, bought: false },
    { name: 'water', price: 17, item: 6, bought: true },
];
productList.forEach(elem => console.log(elem));
// ------------------------------------------------------------------------------------------------

// Сума придбаних продуктів
function sumProduct() {
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].bought === true) {
            return productList[i].item * productList[i].price;
        } else if (productList[i].bought === false) {
            return 'Not added';
        }
    };
}
sumProduct()
console.log(sumProduct());
// -------------------------------------------------------------------------------------------------

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
let value = 'bread';
const newProduct = []
let product = function () {
    productList.filter(elem => {
        if (elem.name !== value) {
            return newProduct.push(elem);
        }
    });
};
product()
console.log(newProduct)
// --------------------------------------------------------------------------------------------------

// Перевірка куплений продукт чи ні 
value = 'chees';
function check() {
    for (let i = 0; i < productList.length; i++) {
        if (value == productList[i].name) {
            return true;
        } else {
            return false;
        }
    }
};
check();
console.log(check());
// ==================================================================================================

// покупка продукту
value = 'water'
const array = productList
    .filter(arr => arr.name === value)
    .map(arr => {
        return {
            name: value,
            bought: arr.bought
        }
    });
console.log(array);
// -----------------------------------------------------------------------------------------------------

// пошук продукту
let prodList = productList.find(elem => elem.name === value);
console.log(prodList);

// -----------------------------------------------------------------------------------------------------
const newList = [];
const addToShopList = () => {
    let x = productList.find(elem => elem.name === value);
    console.log(x.item)

    for (let i = 0; i < productList.length; i++) {
        if (x.name == productList[i].name) {
            x.item += productList[i].item;
        }else {
            return x;
        }
    }
}
addToShopList();
console.log(addToShopList())

console.log(newList)

