document.addEventListener("DOMContentLoaded", () => {
    function myDate() {
        const dia = document.querySelector("#day");
        const fecha = document.querySelector("#date");
        const hora = document.querySelector("#hour");
        // const dias = ["DOM","LUN","MAR","MIE","JUE","VIE","SAB"];

        let date = new Date();
        let myDay = date.toLocaleDateString(undefined, {weekday: 'long'});
        let myDate = date.toLocaleDateString(undefined, {month: 'long'});

        // dia.textContent = dias[date.getDay()];
        dia.textContent = myDay.toUpperCase();
        fecha.textContent = `${date.getDate().toString().padStart(2,'0')} de ${myDate.slice(0, 1).toUpperCase().concat(myDate.slice(1))} de ${date.getFullYear()}`;
        hora.textContent = `${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}:${date.getSeconds().toString().padStart(2,'0')}`;
    }

    myDate();

    let a = setInterval(myDate, 1000);
})