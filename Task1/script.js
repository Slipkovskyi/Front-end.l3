// TASK 1.1 TASK 1.1 TASK 1.1 TASK 1.1 TASK 1.1 TASK 1.1 TASK 1.1 TASK 1.1 TASK 1.1 TASK 1.1 TASK 1.1 TASK 1.1 TASK 1.1 TASK 1.1

// Використовуємо метод querySelectorAll для знаходження всіх абзаців у div-блоці
const paragraphsDiv = document.getElementById("paragraphs");
const paragraphs = paragraphsDiv.querySelectorAll("p");

// Створюємо масив, щоб зберегти кількість символів у кожному абзаці
const characterCounts = [];

// Перебираємо кожен абзац та додаємо його кількість символів до масиву
paragraphs.forEach(paragraph => {
    const text = paragraph.innerText;
    const characterCount = text.length;
    characterCounts.push(characterCount);
});

// Виводимо масив з кількістю символів у консоль
console.log(characterCounts);

// TASK 1.2 TASK 1.2 TASK 1.2 TASK 1.2 TASK 1.2 TASK 1.2 TASK 1.2 TASK 1.2 TASK 1.2 TASK 1.2 TASK 1.2 TASK 1.2 TASK 1.2 TASK 1.2

//TASK1.2.1

let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];

// Найменше та найбільше значення
const minValue = Math.min(...arr);
const maxValue = Math.max(...arr);
console.log("Найменше значення:", minValue);
console.log("Найбільше значення:", maxValue);

// Кількість парних та непарних чисел
const evenNumbers = arr.filter(num => num % 2 === 0);
const oddNumbers = arr.filter(num => num % 2 !== 0);
console.log("Кількість парних чисел:", evenNumbers.length);
console.log("Кількість непарних чисел:", oddNumbers.length);

// Кількість чисел, що містять дві цифри
const twoDigitNumbers = arr.filter(num => num >= 10 && num <= 99);
console.log("Кількість чисел, що містять дві цифри:", twoDigitNumbers.length);

// Кількість додатних та кількість від’ємних чисел
const positiveNumbers = arr.filter(num => num > 0);
const negativeNumbers = arr.filter(num => num < 0);
console.log("Кількість додатних чисел:", positiveNumbers.length);
console.log("Кількість від’ємних чисел:", negativeNumbers.length);

//TASK1.2.2

// Відсортуйте масив arr у порядку зростання значень та виведіть у консоль результат.
const sortedArr = arr.slice().sort((a, b) => a - b);
console.log("Відсортований масив (у порядку зростання):", sortedArr);

//TASK1.2.3

// Створіть масив з оберненим порядком елементів та виведіть його у консоль.
const reversedArr = arr.slice().reverse();
console.log("Масив з оберненим порядком елементів:", reversedArr);
