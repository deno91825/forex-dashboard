// Handles browser local storage


export function saveFavorites(favorites) {

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

}



export function saveFavorite(currency) {

    let favorites = JSON.parse(
        localStorage.getItem("favorites")
    ) || [];


    if (!favorites.includes(currency)) {

        favorites.push(currency);

    }


    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

}


export function getFavorites() {

    return JSON.parse(
        localStorage.getItem("favorites")
    ) || [];

}

export function removeFavorite(currency) {

    let favorites = getFavorites();

    favorites = favorites.filter(
        item => item !== currency
    );

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

}