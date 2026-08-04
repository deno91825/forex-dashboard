import { getExchangeRates } from "./api.js";
import { displayMessage } from "./ui.js";
import { getFavorites, saveFavorite } from "./storage.js";
import { renderFavorites,renderExchangeRates } from "./ui.js";

function setupSearch() {

    const button = document.querySelector("#search-button");

    button.addEventListener("click", async () => {

        const currency = document
            .querySelector("#currency-search")
            .value
            .trim()
            .toUpperCase();

        if (!currency) {

            alert("Please enter a currency code.");

            return;

        }

        const data = await getExchangeRates(currency);

        if (data) {

            renderExchangeRates(data.conversion_rates);

        }

    });

}

function init() {
    console.log("Forex Dashboard Started");

    getExchangeRates("USD")
        .then(data => {

            renderExchangeRates(data.conversion_rates);

        });

    const favorites = getFavorites();

    displayMessage(`Saved favorites: ${favorites.length}`);

    renderFavorites(favorites);

    setupSearch();
    setupConverter();
    setupFavorites();
}

async function setupConverter() {

    const button = document.querySelector("#convert-button");

    button.addEventListener("click", async () => {

        const amount = Number(
            document.querySelector("#amount").value
        );

        const from = document.querySelector("#from-currency").value;

        const to = document.querySelector("#to-currency").value;


        const data = await getExchangeRates(from);


        if (!data) {

            return;

        }


        const rate = data.conversion_rates[to];


        const result = amount * rate;


        document.querySelector("#conversion-result")
            .innerHTML = `
                <h3>
                    Result
                </h3>

                <p>
                    ${amount} ${from} =
                    ${result.toFixed(2)} ${to}
                </p>
            `;

    });

}

function setupFavorites() {

    const button = document.querySelector("#favorite-button");


    button.addEventListener("click", () => {

        const currency = document
            .querySelector("#currency-search")
            .value
            .trim()
            .toUpperCase();


        if (!currency) {

            alert("Enter a currency first.");

            return;

        }


        saveFavorite(currency);


        const favorites = getFavorites();


        renderFavorites(favorites);


        alert(`${currency} saved`);

    });

}

init();