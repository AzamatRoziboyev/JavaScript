const input = document.querySelector('#todoInput')
const addBtn = document.querySelector('#addBtn')
const todoList = document.querySelector('#todoList')
const count = document.querySelector('#count')

addBtn.addEventListener("click", addTudo)
function addTudo() {
    const text = input.value.trim()

    if (text === "") {
        alert("Siz inputga qiymat yozmadingiz!")
        return
    }
    const li = document.createElement("li")
    li.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn">O'chirish</button>
    `
    todoList.appendChild(li)

    input.value = ""

    updateCount()

    li.querySelector("span").addEventListener("click", () => {
        li.classList.toggle("completed")
    })
    li.querySelector(".delete-btn").addEventListener("click", () => {
        let javob = prompt("siz rostan ham ochirmoqchimsiz")
        if (javob.toLocaleLowerCase() === "ha") {
            li.remove()
        }
    
        updateCount()
    })

    function updateCount() {
        count.textContent = todoList.children.length
    }
}