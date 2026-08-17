const btn =document.getElementById('btn')
btn.addEventListener("click", () => {
    document.body.classList.toggle("light")

    if (document.body.classList.contains("light")) {
        btn.style.fontSize = "46px"
        btn.textContent = `☀️`
    } else {
        btn.style.fontSize = "46px"
        btn.textContent =  ``
    }
})