document.querySelectorAll(".select").forEach(select => {
    select.addEventListener("click", () => {
        select.querySelector(".options").classList.toggle("open")
    })

    const input = select.querySelector("input")
    const selectedValue = select.querySelector(".selected-value")
    const options = select.querySelectorAll(".options li");

    options.forEach(option => {
        option.addEventListener("click", () => {
            options.forEach(it => it.classList.remove("selected"))
            option.classList.add("selected")

            selectedValue.innerHTML = option.innerHTML
            input.value = option.getAttribute("data-value")
        })
    })
})
