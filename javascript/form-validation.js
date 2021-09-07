const nameInput = document.querySelector("input[name=name]")
const emailInput = document.querySelector("input[name=email]")

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

nameInput.addEventListener("keyup", () => nameInput.classList.remove("error"))
emailInput.addEventListener("keyup", () => emailInput.classList.remove("error"))

document.querySelector("input[type=submit]").addEventListener("click", e => {
    if (nameInput.value === "") {
        e.preventDefault()
        nameInput.classList.add("error")
    }

    if (!emailInput.value.match(emailRegex)) {
        e.preventDefault()
        emailInput.classList.add("error")
    }
})
