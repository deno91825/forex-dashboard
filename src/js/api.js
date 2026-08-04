const API_KEY = "1be13f6384235b7a330afb7f";

const BASE_URL = 
`https://v6.exchangerate-api.com/v6/${API_KEY}`;


export async function getExchangeRates(currency = "USD") {

    try {

        const response = await fetch(
            `${BASE_URL}/latest/${currency}`
        );


        if (!response.ok) {

            alert("Currency not found.");

            return null;

        }


        const data = await response.json();

        console.log(data);

        return data;

    } catch(error) {

        console.error(error);

    }

}