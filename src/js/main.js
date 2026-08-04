import { getExchangeRates, getFinancialNews } from "./api.js";
import { displayMessage } from "./ui.js";
import { getFavorites } from "./storage.js";

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

    setupSearch();
}

init();