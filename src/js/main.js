import { getExchangeRates, getFinancialNews } from "./api.js";

import { displayMessage } from "./ui.js";

import { getFavorites } from "./storage.js";



function init() {


    console.log("Forex Dashboard Started");


    getExchangeRates();

    getFinancialNews();


    const favorites = getFavorites();


    displayMessage(
        `Saved favorites: ${favorites.length}`
    );


}



init();