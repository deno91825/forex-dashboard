import { getExchangeRates } from "./api.js";
import { displayMessage } from "./ui.js";
import { getFavorites } from "./storage.js";
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
}

function setupConverter() {
    const button = document.querySelector("#convert-button");

    button.addEventListener("click", () => {
        const amount = document.querySelector("#amount").value;
        const from = document.querySelector("#from-currency").value;
        const to = document.querySelector("#to-currency").value;

        console.log(
            `Convert ${amount} ${from} to ${to}`
        );
    });
}

init();