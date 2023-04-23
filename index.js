const input = document.createElement("input");
input.type = "datetime-local";
input.addEventListener("focusout", getDatesSubtraction);

const p = document.createElement("p");

document.body.appendChild(input);
document.body.appendChild(p);

// Retrieve the stored date from sessionStorage
const storedDate = sessionStorage.getItem('inputDate');
if (storedDate) {
    input.value = storedDate;
}

function getDatesSubtraction() {
    // Retrieve the entered date from the input element
    let lta_date = new Date(input.value);

    // Calculate the difference between the entered date and now
    let ms = Math.abs(new Date() - lta_date);
    const days = Math.floor(ms / (24 * 60 * 60 * 1000));
    const daysms = ms % (24 * 60 * 60 * 1000);
    const hours = Math.floor(daysms / (60 * 60 * 1000));
    const hoursms = ms % (60 * 60 * 1000);
    const minutes = Math.floor(hoursms / (60 * 1000));
    const minutesms = ms % (60 * 1000);
    const sec = Math.floor(minutesms / 1000);

    // Display the result in the paragraph element
    p.innerHTML = days + "d " + hours + "h " + minutes + "m " + sec + "s";

    // Store the entered date in sessionStorage
    sessionStorage.setItem('inputDate', input.value);

    // Re-run this function every second
    setTimeout(getDatesSubtraction, 1000);
}
