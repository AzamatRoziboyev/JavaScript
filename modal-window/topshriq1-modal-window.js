const login = document.querySelector('.login') 
const loginBtn = document.querySelector('.login-btn')
const btn = document.querySelector('.btn')
// * 2
const sign = document.querySelector('.sign')
const signBtn = document.querySelector('.sign-up')
const btn1 = document.querySelector('.btn1')

loginBtn.addEventListener("click", () => {
    login.classList.add("active")
})
loginBtn.addEventListener("click", () => {
    btn.classList.remove("active")
})
// *2
signBtn.addEventListener("click", () => {
    sign.classList.add("active")
})
signBtn.addEventListener("click", () => {
    btn1.classList.remove("active")
})


