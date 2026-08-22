const login = document.querySelector('.login') 
const sign = document.querySelector('.sign')
const loginBtn = document.querySelector('.login-btn')
const p1 = document.querySelector('p1')
loginBtn.addEventListener("click", () => {
    login.classList.add("active")
})
loginBtn.addEventListener("click", () => {
    p1.classList.remove("active")
})

