/*
// 1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
const age = +prompt("How old are you?");
if (age >= 0 && age < 12) {
    console.log("You are a child");
} else if (age >= 12 && age < 18) {
    console.log("You are a teenager");
} else if (age >= 18 && age < 60) {
    console.log("You are a grown-up");
} else if (age >= 60) {
    console.log("You are a pensioner");
} else {
    console.error("You enter incorrect data");
}

// 2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
const number = +prompt("Enter number from 0 to 9");
switch (number) {
    case 0:
        console.log(")");
        break;
    case 1:
        console.log("!");
        break;
    case 2:
        console.log("@");
        break;
    case 3:
        console.log("#");
        break;
    case 4:
        console.log("$");
        break;
    case 5:
        console.log("%");
        break;
    case 6:
        console.log("^");
        break;
    case 7:
        console.log("&");
        break;
    case 8:
        console.log("*");
        break;
    case 9:
        console.log("(");
        break;
    default:
        console.error("Wrong number");
        break;
}

// 3. Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
const number = +prompt("Enter number xxx");
const x1 = Math.trunc(number / 100);
const x2 = Math.trunc(number % 100 / 10);
const x3 = number % 10;
if (x1 === x2 || x1 === x3 || x2 === x3) {
    console.log("Your number has the same numerals")
} else {
    console.error("Your number doesn't have the same numerals");
}

// 4. Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
const year = +prompt("Enter a year");
if (Number.isInteger(year / 400) || Number.isInteger(year / 4) && !Number.isInteger(year / 100)) {
    console.log("leap-year");
} else {
    console.log("NOT a leap-year");
}

// 5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
const number = Number(prompt("Enter xxxxx number"));
const x1 = Math.trunc(number / 10000);
const x2 = Math.trunc(number % 10000 / 1000);
const x3 = Math.trunc(number % 1000 / 100);
const x4 = Math.trunc(number % 100 / 10);
const x5 = number % 10;
if (x1 === x5 && x2 === x4) {
    console.log(`The number ${number} is a palindrome`);
} else {
    console.error(`The number ${number} is NOT a palindrome`);
}

// 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
const USD = +prompt("Enter sum in $"),
    currency = prompt("Enter the currency: EUR, UAH, AZN");
let EUR,
    UAH,
    AZN;
if (USD >= 0 && currency.toUpperCase() == "EUR") {
    EUR = USD * 0.9082;
    console.log(`Your ${USD}USD is ${EUR.toFixed(2)}EUR`);
} else if (USD >= 0 && currency.toUpperCase() == "UAH") {
    UAH = USD * 27;
    console.log(`Your ${USD}USD is ${UAH.toFixed(2)}UAH`);
} else if (USD >= 0 && currency.toUpperCase() == "AZN") {
    AZN = USD * 1.6948;
    console.log(`Your ${USD}USD is ${AZN.toFixed(2)}UAH`);
} else {
    console.error("Not correct currency or sum");
}

// 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
const sum = +prompt("Enter sum in $");
if (sum >= 200 && sum < 300) {
    console.log(`Your discount is 3% and to pay ${(sum * 0.97).toFixed(2)}$`);
} else if (sum >= 300 && sum < 500) {
    console.log(`Your discount is 5% and to pay ${(sum * 0.95).toFixed(2)}$`);
} else if (sum >= 500) {
    console.log(`Your discount is 7% and to pay ${(sum * 0.93).toFixed(2)}$`);
} else {
    console.error("No discount");
}

// 8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
const l = +prompt("Enter a circumference");
const P = +prompt("Enter a square perimeter");
const d = l / 3.14;
const a = P / 4;
console.log(d <= a ? "can" : "can't, circle too big");

// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
const q1 = +prompt("2 + 3 is ?");
const q2 = prompt("7 < 5 is true or false");
const q3 = prompt("The capital of UK?");
let rating;
if (q1 === 5 && q2 === "false" && q3.toLowerCase() === "london") {
    rating = 6;
} else if ((q1 === 5 && q2 === "false") || (q2 === "false" && q3.toLowerCase() === "london") || (q1 === 5 && q3.toLowerCase() === "london")) {
    rating = 4;
} else if (q1 === 5 || q2 === "false" || q3.toLowerCase() === "london") {
    rating = 2;
} else {
    rating = 0;
}
console.log(rating);

// 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
// cheating, sorry =)
const d = +prompt("Enter day"),
    m = +prompt("Enter month"),
    y = +prompt("Enter year");
let today = new Date(y, m - 1, d);
today.setDate(today.getDate() + 1);
console.log(today);
*/