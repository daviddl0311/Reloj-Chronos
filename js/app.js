document.addEventListener("DOMContentLoaded", () => {
    function myDate() {
        const dia = document.querySelector("#day");
        const fecha = document.querySelector("#date");
        const hora = document.querySelector("#hour");
        // const dias = ["DOM","LUN","MAR","MIE","JUE","VIE","SAB"];
        let date = new Date();

        // dia.textContent = dias[date.getDay()];
        dia.textContent = date.toLocaleDateString(undefined, {weekday: 'long'}).toUpperCase();
        fecha.textContent = `${date.getDate().toString().padStart(2,'0')} de ${date.toLocaleDateString(undefined, {month: 'long'})} de ${date.getFullYear()}`;
        hora.textContent = `${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}:${date.getSeconds().toString().padStart(2,'0')}`;
    }

    myDate();

    let a = setInterval(myDate, 1000);
})