const loginKatta = document.querySelector('.login-katta')
const loginBtn = document.querySelector('.login-btn')
const closebtn = document.querySelector('.close-btn')
// *
const a1 = document.querySelector('.a1')
const a1Katta = document.querySelector('.a1-katta')

loginBtn.addEventListener("click", () => {
    loginKatta.classList.add("active")
})
closebtn.addEventListener("click", () => {
    loginKatta.classList.remove("active")
})
//* a1
a1.addEventListener("click", () => {
    a1Katta.classList.add("active")
})