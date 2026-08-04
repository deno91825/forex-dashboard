import { getExchangeRates, getFinancialNews } from "./api.js";
import { displayMessage } from "./ui.js";
import { getFavorites } from "./storage.js";
import { renderFavorites } from "./ui.js";

function setupSearch() {
    const button = document.querySelector("#search-button");

    button.addEventListener("click", () => {
        const currency = document.querySelector("#currency-search").value;

        console.log("Searching for:", currency);
    });
}

function init() {
    console.log("Forex Dashboard Started");

    getExchangeRates();
    getFinancialNews();

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