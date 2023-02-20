// Створити HTML-сторінку для відображення/редагування тексту.
//  При відкритті сторінки текст відображається за допомогою тега div.
//  При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом,
//  який тепер можна редагувати. При натисканні Ctrl + S,
//  замість textarea з'являється div з уже зміненим текстом.
//  Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

document.body.addEventListener("keydown", (event) => {
  const resizer = document.createElement("div");
  if ((event.code === "KeyE" || event.code === "KeyS") && event.ctrlKey) {
    event.returnValue = false;
    let element = document.querySelector(".content__textarea");
    if (event.code === "KeyE" && element.nodeName === "DIV") {
      let newElement = document.createElement("textarea");
      newElement.setAttribute("cols", 60);
      newElement.setAttribute("rows", 15);
      newElement.className = "content__textarea";
      newElement.textContent = element.textContent;
      element.replaceWith(newElement);
    } else if (event.code === "KeyS" && element.nodeName === "TEXTAREA") {
      let newEl = document.createElement("div");
      newEl.className = "content__textarea";
      newEl.textContent = element.value;
      resizer.className = "content__textarea--resizer";

      const initResize = e => {
        e.preventDefault;
        window.addEventListener("mousemove", startResize);
        window.addEventListener("mouseup", stopResize);
      };

      const startResize = e => {
        newEl.style.width = (e.clientX - newEl.offsetLeft) + "px";
      }

      const stopResize = e => {
        e.preventDefault;
        window.removeEventListener("mousemove", startResize);
        window.removeEventListener("mouseup", stopResize);
      };

      resizer.addEventListener("mousedown", initResize);
      newEl.append(resizer);
      element.replaceWith(newEl);
    };
  };
});

//  ==================================================================================================
// Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця,
//  необхідно відсортувати дані цього стовпця. Врахуй, 
// що числові значення повинні сортуватися як числа, а не як рядки.

const mainDiv = document.getElementById('content');

const tableDiv = document.createElement('div');
tableDiv.setAttribute('id', 'content__table--div');
tableDiv.className = 'content__table--div';

const tableTag = document.createElement('table');
tableTag.setAttribute('id', 'content__table');
tableTag.className = 'content__table';

tableDiv.append(tableTag);
mainDiv.append(tableDiv);

class Car {
  constructor (brand, model, country, color, price) {
    this.brand = brand;
    this.model = model;
    this.country = country;
    this.color = color;
    this.price = price;
  }
}
const arrCars = [
  new Car('Toyota', 'Camry', 'Japan', 'black', 9000),
  new Car('Hunday', 'Sonata', 'Korea', 'brown', 13000),
  new Car('Renault', 'Megane', 'France', 'red', 5000),
  new Car('BMW', 'X5', 'German', 'black', 18000),
  new Car('Mersedes', 'S500', 'German', 'white', 30000),
  new Car('Peugeot', "3008", 'France', 'blue', 25000),
  new Car('Audi', 'Q7', 'German', 'white', 20000),
  new Car('Lexus', 'LS250', 'Japan', 'silver', 19000),
  new Car('Hunday', 'Elantra', 'Korea', 'black', 13000),
  new Car('Nisan', 'Murano', 'France', 'green', 22000),
  new Car('Opel', 'Astra', 'German', 'yellow', 11000),
  new Car('Mazda', 'RX8', 'Japan', 'gold', 21000),
  new Car('Bently', 'Continental', 'UK', 'blue', 55000),
  new Car('JEEP', 'Cherokee', 'USA', 'black', 25000),
  new Car('Lamborghini', 'Gallardo', 'Itali', 'yellow', 90000),
  new Car('KIA', 'Cerrato', 'Korea', 'orange', 17000),
  new Car('Suzuki', 'Kizashi', 'Japan', 'white', 23000),
  new Car('Mitsubishi', 'Lancer', 'Japan', 'gold', 11000),
  new Car('Maybach', 'Landaulet', 'German', 'black', 78000),
];

class Table {
  constructor(arr) {
    this.arr = arr;
  }
  getHtml() {
    const table = document.getElementById('content__table');
    const tbody = document.createElement('tbody');
    tbody.setAttribute('id', 'content__tbody');
    table.append(tbody);
    const array = this.arr;
    const head = document.createElement('tr');
    head.setAttribute('style', 'font-size: 18px;');
    const th1 = document.createElement('th');
    th1.textContent = 'Brand';
    th1.setAttribute('id', 'content__th1');
    th1.style.cursor = 'pointer';
    const th2 = document.createElement('th');
    th2.textContent = 'Model';
    th2.setAttribute('id', 'content__th2');
    th2.style.cursor = 'pointer';
    const th3 = document.createElement('th');
    th3.textContent = 'Country';
    th3.setAttribute('id', 'content__th3');
    th3.style.cursor = 'pointer';
    const th4 = document.createElement('th');
    th4.textContent = 'Color';
    th4.setAttribute('id', 'content__th4');
    th4.style.cursor = 'pointer';
    const th5 = document.createElement('th');
    th5.textContent = 'Price';
    th5.setAttribute('id', 'content__th5');
    th5.style.cursor = 'pointer';

    head.append(th1);
    head.append(th2);
    head.append(th3);
    head.append(th4);
    head.append(th5);
    tbody.append(head);
    for (let elem in array) {
      let tr = document.createElement('tr');
      tbody.append(tr);
      for (let item in array[elem]) {
        let td = document.createElement('td');
        td.textContent = array[elem][item];
        tr.append(td);
        td.setAttribute('style', 'padding: 5px 10px; font-size: 18px;');
      }
    }
    table.setAttribute('border', '2');
    table.setAttribute('bordercolor', 'red');
    table.setAttribute('width', '60%');
    table.setAttribute('style', 'margin: auto; background-color: biege;');
  }
}
const tableObj = new Table(arrCars)
tableObj.getHtml();

const getCellValue = (tr, i) => tr.children[i].innerText || tr.children[i].textContent;

const compare = (i, asc) => (a,b) => ((v1, v2) => 

v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2))
(getCellValue(asc ? a : b, i), getCellValue(asc ? b: a, i));

document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
  const table = th.closest('table');
  Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
      .sort(compare(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
      .forEach(tr => table.appendChild(tr));
})));

