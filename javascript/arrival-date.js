const arrivalDate = moment().startOf("day").add(30, "days")
document.getElementById("arrival-date").innerText = arrivalDate.format("D MMM YYYY")

setTimes()
setInterval(setTimes, 1000)

function setTimes() {
    const timeLeft = moment.duration(arrivalDate.diff(moment()))

    document.getElementById("arrival-date-days").innerText = pad(timeLeft.get("days"))
    document.getElementById("arrival-date-hours").innerText = pad(timeLeft.get("hours"))
    document.getElementById("arrival-date-minutes").innerText = pad(timeLeft.get("minutes"))
    document.getElementById("arrival-date-seconds").innerText = pad(timeLeft.get("seconds"))
}

function pad(number) {
    return String(number).padStart(2, "0")
}
