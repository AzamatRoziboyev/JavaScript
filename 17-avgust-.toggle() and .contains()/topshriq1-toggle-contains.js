const btn1 =document.getElementById('btn1')
btn1.addEventListener("click", () => {
    document.body.classList.toggle("light")

    if (document.body.classList.contains("light")) {
        btn1.style.fontSize = "26px"
        btn1.textContent = `☀️ Dark Mode`
    } else {
        btn1.style.fontSize = "26px"
        btn1.textContent =  `🌙 Dark Mode`
    }
})