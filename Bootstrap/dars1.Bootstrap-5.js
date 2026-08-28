const loginKatta = document.querySelector('.login-katta')
const loginBtn = document.querySelector('.login-btn')
const closebtn = document.querySelector('.close-btn')
const signUp = document.querySelector('.sign-up')
// *
const a1 = document.querySelector('.a1')
const a1Katta = document.querySelector('.a1-katta')
const a1Close = document.querySelector('.a1-close')
// *
const a2 = document.querySelector(".a2")
const a2Katta = document.querySelector('.a2-katta')
const a2Close = document.querySelector('.a2-close')
// * 
const a3 = document.querySelector(".a3")
const a3Katta = document.querySelector('.a3-katta')
const a3Close = document.querySelector('.a3-close')

loginBtn.addEventListener("click", () => {
    loginKatta.classList.add("active")
})
closebtn.addEventListener("click", () => {
    loginKatta.classList.remove("active")
})
signUp.addEventListener("click", () => {
    loginKatta.classList.add("active")
})
//* a1
a1.addEventListener("click", () => {
    a1Katta.classList.add("active")
})
a1Close.addEventListener("click", () => {
    a1Katta.classList.remove("active")
})
//* a2
a2.addEventListener("click", () => {
    a2Katta.classList.add("active")
})
a2Close.addEventListener("click", () => {
    a2Katta.classList.remove("active")
})
// *3
a3.addEventListener("click", () => {
    a3Katta.classList.add("active")
})
a3Close.addEventListener("click", () => {
    a3Katta.classList.remove("active")
})