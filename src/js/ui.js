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
        "<p>No favorites saved.</p>";

        return;

    }


    container.innerHTML = favorites
        .map(currency => `

            <div class="favorite-card">

                <span>
                    ${currency}
                </span>


                <button 
                    class="remove-favorite"
                    data-currency="${currency}">
                    Remove
                </button>

            </div>

        `)
        .join("");

}

export function renderNews(news) {

    const container = document.querySelector("#news-list");


    if (!news.length) {

        container.innerHTML =
        "<p>No news available.</p>";

        return;

    }


    container.innerHTML = news
        .map(article => `
            <article class="news-card">

                <h3>
                    ${article.title}
                </h3>

                <p>
                    ${article.description || ""}
                </p>

            </article>
        `)
        .join("");

}

export function renderExchangeRates(rates) {

    const container = document.querySelector(".market-container");

    const currencies = ["USD", "EUR", "GBP", "UGX", "KES", "TZS"];

    container.innerHTML = "";

    currencies.forEach(currency => {

        const card = `
            <div class="rate-card">
                <h3>${currency}</h3>
                <p>${rates[currency]}</p>
            </div>
        `;

        container.innerHTML += card;

    });

}