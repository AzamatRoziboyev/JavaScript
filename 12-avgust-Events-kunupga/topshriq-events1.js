const button = document.getElementById('button')
button.addEventListener("click", () => {
    console.log("ishladi");
    button.innerHTML = `
        <button style = "
        width: 300px;       
        height: 60px;
        background-color:  rgb(15, 131, 15);
        font-size: 25px;
        border: none;
        border-radius: 12px;
        color: white
        "> 8/13/2026 </button>
    `
})