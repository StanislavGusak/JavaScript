"use strickt"
// Об'єкт який описує автомобіль

let car = {
    brand: 'Toyota',
    model: 'Land Cruiser 200',
    yearOfManufacture: 2020,
    averageSpeed: 150,
    tankVolume: 93,
    fuelConsumption: 8.1,

    findFuel: function (distance) {
        return (distance * this.fuelConsumption) / standartConsumption;
    },

    findTime: function (distance) {
        const timeWithoutRest = Math.round(Number(distance / this.averageSpeed));
        console.log(timeWithoutRest, 'кількість часу без зупинок');
        const countOfRestings = (this.findCountOfRest(timeWithoutRest));
        console.log(countOfRestings, 'кількість зупинок');
        return timeWithoutRest + countOfRestings;
    },

    findCountOfRest: function (timeWithoutRest) {
        const periodBetweenRestings = 4;
        return Math.floor(timeWithoutRest / periodBetweenRestings);
    }
}

for (let key in car) {
    console.log(key, car[key]);
}

car.driver = 'Maksim';
console.log(car.driver);
console.log('driver' in car);

const standartConsumption = 100;
console.log(Number(car.findTime(800)), 'Стільки часу потрібно для подолання вказаної відстані');
console.log(Number(car.findFuel(800)), 'Стільки палива потрібно для подолання вказаної відстані');


// Об'єкт який описує час
// --------------------------------------------------------------------------------------------------->>>>>>>>
let time = {
    hours: 20,
    minutes: 59,
    seconds: 45,
    showTime: function () {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    },
    addSeconds: function (seconds) {
        if (seconds <= 0) {
            console.log(`Ви ввели некоректний час!!!`);
        } else if (this.seconds + seconds >= 60) {
            let differenceMin = Math.floor((this.seconds + seconds) / 60);
            this.seconds = (this.seconds + seconds) % 60;
            this.addMinutes(differenceMin);
        } else if (seconds === undefined) {
            seconds = this.seconds;
        } else {
            this.seconds += seconds;
        }
        this.addZeroSec()
    },
    addMinutes: function (minutes) {
        if (minutes <= 0) {
            console.log(`Ви ввели не коректний час`);
        } else if (this.minutes + minutes >= 60) {
            let differenceHours = Math.floor((this.minutes + minutes) / 60);
            this.minutes = (this.minutes + minutes) % 60;
            this.addHours(differenceHours);
        } else if (minutes === undefined) {
            minutes = this.minutes;
        } else {
            this.minutes += minutes;
        }
        this.addZeroMin()
    },
    addHours: function (hours) {
        if (hours <= 0) {
            console.log(`Ви ввели некоректний час!!!`);
        } else if (this.hours + hours >= 24) {
            this.hours = (this.hours + hours) % 24;
        } else if (hours === undefined) {
            hours = this.hours;
        } else {
            this.hours += hours;
        }
        this.addZeroHour()
    },
    addZeroHour: function () {
         if (this.hours < 10) {
            this.hours = ('0' + this.hours).slice(-2);
        }
    },
    addZeroMin: function () {
        if (this.minutes < 10) {
            this.minutes = ('0' + this.minutes).slice(-2);
        }
    },
    addZeroSec: function () {
        if (this.seconds < 10) {
            this.seconds = ('0' + this.seconds).slice(-2);
        }
    },
    init() {
        this.showTime();
        this.addZeroHour();
        this.addZeroMin();
        this.addZeroSec();
        this.addHours();
        this.addMinutes();
        this.addSeconds(30);
        this.showTime();   
    }
}
   
time.init()



