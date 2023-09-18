// Знаходимо всі div-блоки з класом "table"
const tableDivs = document.querySelectorAll(".table");

// Перебираємо кожен div-блок
tableDivs.forEach((tableDiv, index) => {
    // Знаходимо всі теги td у поточному div-блоці
    const tdElements = tableDiv.querySelectorAll("td");

    // Додаємо клас "selected" до кожного другого td
    tdElements.forEach((td, tdIndex) => {
        if (tdIndex % 2 === 1) {
            td.classList.add("selected");
        }
    });
});
