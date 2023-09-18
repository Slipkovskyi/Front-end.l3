// Функція для створення матриці заданого розміру з випадковими цілими числами в заданому діапазоні
function createMatrix(rows, columns, min, max) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            row.push(randomNum);
        }
        matrix.push(row);
    }
    return matrix;
}

const N = 7; // Кількість рядків
const M = 5; // Кількість стовпців

const minNum = -10; // Мінімальне значення елементів матриці
const maxNum = 10;  // Максимальне значення елементів матриці

// Створюємо матрицю 7x5 з випадковими цілими числами в діапазоні від -10 до 10
const matrix = createMatrix(N, M, minNum, maxNum);

console.log("Матриця:", matrix);

//Кількість додатних елементів:

const positiveCount = matrix.flat().filter(num => num > 0).length;
console.log("Кількість додатних елементів:", positiveCount);

//Кількість рядків, які не містять жодного нульового елемента:

const rowsWithoutZerosCount = matrix.filter(row => !row.includes(0)).length;
console.log("Кількість рядків без нульових елементів:", rowsWithoutZerosCount);

//Кількість стовпців, які містять хоча б один нульовий елемент:

const columnsWithZerosCount = matrix[0].map((_, columnIndex) =>
    matrix.some(row => row[columnIndex] === 0)
).filter(Boolean).length;
console.log("Кількість стовпців з нульовим елементом:", columnsWithZerosCount);

//Номер рядка, в якому знаходиться найдовша серія однакових елементів:

const longestSeriesRowIndex = matrix.indexOf(
    matrix.reduce((prev, current) => (current.join('') > prev.join('') ? current : prev))
);
console.log("Номер рядка з найдовшою серією однакових елементів:", longestSeriesRowIndex);

//Добуток елементів в тих рядках, які не містять від’ємних елементів:

const rowProducts = matrix.map(row =>
    row.some(num => num < 0) ? null : row.reduce((acc, current) => acc * current, 1)
).filter(Boolean);
console.log("Добуток елементів у рядах без від’ємних елементів:", rowProducts);

//Сума елементів в тих стовпцях, які не містять від’ємних елементів:

const columnSums = matrix[0].map((_, columnIndex) =>
    matrix.some(row => row[columnIndex] < 0) ? null : matrix.reduce((acc, current) => acc + current[columnIndex], 0)
).filter(Boolean);
console.log("Сума елементів у стовпцях без від’ємних елементів:", columnSums);

//Сума елементів в тих стовпцях, які містять хоча б один від’ємний елемент:

const columnsWithNegativeSum = matrix[0].map((_, columnIndex) =>
    matrix.some(row => row[columnIndex] < 0) ? matrix.reduce((acc, current) => acc + current[columnIndex], 0) : null
).filter(Boolean);
console.log("Сума елементів у стовпцях з від’ємними елементами:", columnsWithNegativeSum);

//Транспонована матриця:

function transpose(matrix) {
    return matrix[0].map((_, columnIndex) => matrix.map(row => row[columnIndex]));
}

const transposedMatrix = transpose(matrix);
console.log("Транспонована матриця:", transposedMatrix);

//Додаткові завдання:

// Максимум серед сум елементів діагоналей, паралельних головній діагоналі матриці:

function diagonalSum(matrix, rowIndex, columnIndex) {
    let sum = 0;
    while (rowIndex < matrix.length && columnIndex < matrix[0].length) {
        sum += matrix[rowIndex][columnIndex];
        rowIndex++;
        columnIndex++;
    }
    return sum;
}

function maxDiagonalSum(matrix) {
    return Math.max(
        ...matrix[0].map((_, columnIndex) => diagonalSum(matrix, 0, columnIndex)),
        ...matrix.map((_, rowIndex) => diagonalSum(matrix, rowIndex, 0))
    );
}

console.log("Максимум серед сум елементів діагоналей, паралельних головній діагоналі:", maxDiagonalSum(matrix));

//Мінімум серед сум модулів елементів діагоналей, паралельних побічній діагоналі матриці:

function reverseDiagonalSum(matrix, rowIndex, columnIndex) {
    let sum = 0;
    while (rowIndex < matrix.length && columnIndex >= 0) {
        sum += Math.abs(matrix[rowIndex][columnIndex]);
        rowIndex++;
        columnIndex--;
    }
    return sum;
}

function minReverseDiagonalSum(matrix) {
    return Math.min(
        ...matrix[0].map((_, columnIndex) => reverseDiagonalSum(matrix, 0, columnIndex)),
        ...matrix.map((_, rowIndex) => reverseDiagonalSum(matrix, rowIndex, matrix[0].length - 1))
    );
}

console.log("Мінімум серед сум модулів елементів діагоналей, паралельних побічній діагоналі:", minReverseDiagonalSum(matrix));

