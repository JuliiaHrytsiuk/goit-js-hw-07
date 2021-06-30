const categories = document.querySelectorAll("#categories .item")
console.log(`В списке ${categories.length} категории`);

categories.forEach(item => {
    const name = item.querySelector("h2")
    console.log(`Категория: ${name.textContent}`);

    const elements = item.querySelectorAll("li");
    console.log(`Количество элементов: ${elements.length}`);
}

)