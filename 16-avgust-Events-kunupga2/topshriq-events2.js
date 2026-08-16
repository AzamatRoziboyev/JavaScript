const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const add1 = document.getElementById('add1')
const add2 = document.getElementById('add2')
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
btn2.addEventListener("click", () => {
    console.log("Ishladi");
    btn2.innerHTML = `
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
    add2.play()
})
