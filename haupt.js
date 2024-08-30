function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('show'); 
}
function updateCounter() {
    const startDate = new Date('May 8, 1949 00:00:00').getTime();
    const now = new Date().getTime();
    const elapsedTime = now - startDate;

    
    const years = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 365.25));
    const days = Math.floor((elapsedTime % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    document.getElementById('counter').innerHTML = 
        years + ' Jahre ' +
        days + ' Tage ' +
        hours + ' Stunden ' +
        minutes + ' Minuten ' +
        seconds + ' Sekunden';
}

setInterval(updateCounter, 1000);
