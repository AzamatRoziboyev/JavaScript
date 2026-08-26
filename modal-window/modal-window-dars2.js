const bmwBtn = document.querySelector('.bmw-btn')
const bmwKatta = document.querySelector('.bmw-katta')
const closeBtn = document.querySelector('.close-btn')
const mersBtn =document.querySelector('.mers-btn')
const mersKatta = document.querySelector('.mers-katta')
const closeBtn1 = document.querySelector('.close-btn1')


bmwBtn.addEventListener("click", () => {
    bmwKatta.classList.add("active")
})
closeBtn.addEventListener("click", () => {
    bmwKatta.classList.remove("active")
})
mersBtn.addEventListener("click", () => {
    mersKatta.classList.add("active")
})
closeBtn1.addEventListener("click", () => {
    mersKatta.classList.remove("active")
})