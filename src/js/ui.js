// Handles displaying information on the page


export function displayMessage(message) {


    const dashboard = document.querySelector("#dashboard");


    dashboard.innerHTML += `
        <p>${message}</p>
    `;

}