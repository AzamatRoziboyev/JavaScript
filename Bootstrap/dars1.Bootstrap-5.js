const loginKatta = document.querySelector('.login-katta')
const loginBtn = document.querySelector('.login-btn')
const closebtn = document.querySelector('.close-btn')

loginBtn.addEventListener("click", () => {
    loginKatta.classList.add("active")
})
closebtn.addEventListener("click", () => {
    loginKatta.classList.remove("active")
})