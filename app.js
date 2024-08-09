const daysEl = document.querySelector("[data-days]")
const hoursEl = document.querySelector("[data-hours]")
const minutesEl = document.querySelector("[data-minutes]")
const secondsEl = document.querySelector("[data-seconds]")

const newTrip = "27 Sep 2024";

function countdown(){
    const newTripDate = new Date (newTrip);
    const currentDate = new Date();

    const totalSeconds = (newTripDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;



    daysEl.innerHTML = days;
    hoursEl.innerHTML = formartTime(hours);
    minutesEl.innerHTML = formartTime(minutes);
    secondsEl.innerHTML = formartTime(seconds);

}

function formartTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);