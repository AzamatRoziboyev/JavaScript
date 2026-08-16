const btn1 = document.getElementById('btn1')
const add1 = document.getElementById('add1')
btn1.addEventListener("click", () => {
    console.log("Ishladi");
    btn1.innerHTML = `
        <button style = "
         width: 50px;
    height: 50px;
    font-size: 25px;
    border: none;
    border-radius: 50%;
    background-color: rgb(43, 41, 41);
    color: white;
        " ><i class="fa-solid fa-pause"></i></button>
    `
    add1.play()
})