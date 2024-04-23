const coctailSection = document.querySelector(".cocktail-section")
const loader = document.querySelector(".loader")

const urlParams = new URLSearchParams(window.location.search);
const CoctailId = urlParams.get('id');

console.log(CoctailId);


fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${CoctailId}`)
    .then((res) => res.json()
    ).then((data) => {
        loader.classList.add("hidden");
        createDrink(data.drinks[0]);
    });


function createDrink(data) {
    const { strDrink, strGlass, strAlcoholic, strDrinkThumb, strCategory, strInstructions } = data;
    
    coctailSection.innerHTML = ` <a class="btn btn-primary" href="./index.html">back home</a>
        <h2 class="section-title">${strDrink}</h2>
        <div class="drink">
            <img
                src=${strDrinkThumb}
                alt=${strDrink}/>
            <div class="drink-info">
                <p><span class="drink-data">name :</span>${strDrink}</p>
                <p>
                    <span class="drink-data">category :</span> ${strCategory}
                </p>
                <p><span class="drink-data">info :</span> ${strAlcoholic}</p>
                <p>
                    <span class="drink-data">glass :</span> ${strGlass}
                </p>
                <p>
                    <span class="drink-data">instructons :</span> ${strInstructions}
                </p>
                <p>
                    <span class="drink-data">ingredients :</span> ${Array.from({
        length: 15,
    }).map((_, ind) => {
        return `<span>${data[`strIngredient${inx + 1}`]}</span>`
    })}
                </p>
            </div>
        </div>`
}