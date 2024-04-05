const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
let seconds = 0;
let timer ;


function getTimeForSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}
 
function startClock() {
     timer = setInterval(function() {
        seconds++;
        clock.innerHTML = getTimeForSeconds(seconds);
    }, 1000)
}

start.addEventListener('click', (e) => {
    clock.classList.remove('stoped');
    clearInterval(timer);
    startClock();
})

pause.addEventListener('click', (e) => {
    clearInterval(timer);
    clock.classList.add('stoped');
});

reset.addEventListener('click', (e) => {
    clearInterval(timer);
    clock.innerHTML = '00:00:00';
    seconds = 0;
    clock.classList.remove('stoped');
});