let darkmode = document.getElementById("mode");
let darkimg = document.getElementById("darkimg");

if (localStorage.getItem("darkMode") === "dark") {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    darkmode.lastChild.textContent = "Light ";
    darkimg.setAttribute("src", "imges/sun.png"); // darkimg uchun src
    localStorage.setItem("darkMode", "dark");
} else {
    document.body.classList.add("light");
    darkmode.lastChild.textContent = "Dark ";
    darkimg.setAttribute("src", "imges/dark.png");
    localStorage.setItem("darkMode", "light");
}

darkmode.addEventListener("click", () => {
    if (document.body.classList.contains("light")) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        darkmode.lastChild.textContent = "Light ";
        darkimg.setAttribute("src", "imges/sun.png");
        localStorage.setItem("darkMode", "dark");
    } else if (document.body.classList.contains("dark")) {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        darkmode.lastChild.textContent = "Dark ";
        darkimg.setAttribute("src", "imges/dark.png");
        localStorage.setItem("darkMode", "light");
    }
});

// CARDLAR CHIQARISH
const cocktailsCenter = document.querySelector(".cocktails-center");
const loader = document.querySelector(".loader");
const input = document.getElementById("input");

fetch("https://api.unsplash.com/search/photos?client_id=BLfJXcqLCsW9ugd2IXR8eZA64AKiPRjPUFJrxIJZCtw&query=cat")
    .then((res) => res.json())
    .then((data) => {
        loader.classList.add("hidden");
        createDrinks(data.results); // "data.results" ishlatildi
    });

function createDrinks(drinks) {
    cocktailsCenter.innerHTML = "";

    drinks.forEach(({ id, urls: { regular }, alt_description }) => { // { id, urls: { regular }, alt_description } ishlatildi
        const article = document.createElement("article");

        article.classList.add("cocktail");

        article.innerHTML = `<div class="img-container"><img src=${regular} alt=${alt_description}></div>`;

        cocktailsCenter.appendChild(article);
    });
}
// CARDALR CHIQARISH

// INPUT ISHLATYABMIZ SEARCHDI


input.addEventListener("input", (e) => {
    fetch(`https://api.unsplash.com/search/photos?client_id=BLfJXcqLCsW9ugd2IXR8eZA64AKiPRjPUFJrxIJZCtw&query=${e.target.value}`)
        .then((res) => res.json())
        .then((data) => {
            loader.classList.add("hidden");
            createDrinks(data.results); // "data.results" ishlatildi
        });
})





















