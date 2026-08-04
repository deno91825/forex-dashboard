// Handles displaying information on the page


export function displayMessage(message) {


    const dashboard = document.querySelector("#dashboard");


    dashboard.innerHTML += `
        <p>${message}</p>
    `;

}

export function renderFavorites(favorites) {

    const container = document.querySelector("#favorites-list");


    if (!favorites.length) {

        container.innerHTML =
        "<p>No favorite currencies saved.</p>";

        return;

    }


    container.innerHTML = favorites
        .map(currency => `
            <div class="favorite-item">
                <span>${currency}</span>
            </div>
        `)
        .join("");

}