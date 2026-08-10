// const div = document.createElement("div")
// document.body.append(div)
// div.innerHTML = "<h1>Shaxruzbek</h1><p>Salom</p>"
// const h1 = document.querySelector("div h1")
// const p = document.querySelector("div p")
// h1.style.color = "green"
// h1.style.fontSize = "130px"
// p.style.color = "blue"
// p.style.fontSize = "100px"

// div.style.width = "900px"
// div.style.height = "900px"
// div.style.margin = "50px auto"
// div.style.backgroundColor = "red"
// div.style.color = "white"
// div.style.display = "flex"
// div.style.alignItems = "center"
// div.style.flexDirection = "column"
// div.style.justifyContent = "center"
// div.style.borderRadius = "10px"

//*======= main1
const div = document.createElement('div') 
document.body.append(div)

div.innerHTML= `
    <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dicta, accusantium asperiores saepe aliquid quas, iusto culpa dolor non beatae ut cupiditate facilis eaque mollitia delectus nemo. Ipsam ut reiciendis rem beatae, qui optio ab exercitationem dicta iure nobis ullam ratione dolorum nostrum dolore recusandae? Facere voluptatibus in non quo?</div>
    <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dicta, accusantium asperiores saepe aliquid quas, iusto culpa dolor non beatae ut cupiditate facilis eaque mollitia delectus nemo. Ipsam ut reiciendis rem beatae, qui optio ab exercitationem dicta iure nobis ullam ratione dolorum nostrum dolore recusandae? Facere voluptatibus in non quo?</div>
    <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dicta, accusantium asperiores saepe aliquid quas, iusto culpa dolor non beatae ut cupiditate facilis eaque mollitia delectus nemo. Ipsam ut reiciendis rem beatae, qui optio ab exercitationem dicta iure nobis ullam ratione dolorum nostrum dolore recusandae? Facere voluptatibus in non quo?</div>
    <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dicta, accusantium asperiores saepe aliquid quas, iusto culpa dolor non beatae ut cupiditate facilis eaque mollitia delectus nemo. Ipsam ut reiciendis rem beatae, qui optio ab exercitationem dicta iure nobis ullam ratione dolorum nostrum dolore recusandae? Facere voluptatibus in non quo?</div>
   

`
div.id = "divv"
const tashqidiv = document.getElementById('divv')
tashqidiv.style.width = "2000px"
tashqidiv.style.height = "500px"
tashqidiv.style.border = "1px solid red"
tashqidiv.style.margin = "100px auto"
tashqidiv.style.display = "flex"
tashqidiv.style.justifyContent = "space-around"
tashqidiv.style.alignItems = "center"

const ichkiDivlar = document.querySelectorAll("#divv div")

ichkiDivlar.forEach((ichki) => {
    ichki.style.border = "2px solid red";
    ichki.style.width = "300px"
    ichki.style.height = "150px"
    ichki.style.overflow = "scroll"

});