const bmwBtn = document.querySelector('.bmw-btn')
const bmwKatta = document.querySelector('.bmw-katta')
const closeBtn = document.querySelector('.close-btn')

bmwBtn.addEventListener("click", () => {
    bmwKatta.classList.add("active")
})
closeBtn.addEventListener("click", () => {
    bmwKatta.classList.remove("active")
})