//*Function Decloration
// function bir(a, b,) {
//     console.log(a*b);
//     console.log(a / b);

// }
// bir(5, 10)

//* Function Expression
// const kopaytma = function (a, b) {
//     console.log(a * b);
//     console.log(a / b);

// }
// kopaytma(5, 10)

//* Arrow  function
// const bolinma = (a, b,) => a * b
// const bo = (a, b) => a / b
// console.log(bolinma(5, 10), bo(5, 10));

//* obyekt
const obyekt = {
    ism: "Shaxruzbek",
    kasbi: "bekorch",
    arr: [1, 2, 3, 4, 5, 6],
    azamat: function () {
        for (let i of this.arr) {
            if (i % 2 == 0) {
                console.log(i);

            }
        }
    }
}
obyekt.azamat()