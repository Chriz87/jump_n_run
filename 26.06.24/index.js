const country = document.getElementById('countryData');

function countryData() {
    fetch("https://api.country.is/196.144.255.9")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            country.textContent = data.country;
        })
        .catch(error => {
            console.error('Fehler:', error);
            country.textContent = 'Fehler beim Laden der Länder';
        });
}

countryData();

// 196.144.255.9 ist EG (Ägypten)
