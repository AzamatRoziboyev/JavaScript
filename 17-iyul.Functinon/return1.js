function userData() {
  let ism = prompt("Ismingizni kiriting: ")
  let familiya = prompt("Familiyangizni kiriting: ")
  let yosh = Number(prompt("Yoshingizni kiriting: "))

  let malumoti = `Sizning ismingiz ${ism}, familiyangiz ${familiya} va yoshingiz ${yosh}da!`
  
  console.log(malumoti)
}

// userData()

// _______________________________________________________

function daraja(a) {
  return a ** 2
}

// console.log(daraja(2))

// _______________________________________________________
function darajaa(b) {
  console.log(b ** 3)
  return "Return funksiyaga qaytaradi"
}

// darajaa(2)      
// console.log(darajaa(2))

// __________________________________________
function qoshish(a, b) {
    return a + b
}
// console.log(qoshish(5, 20));
// console.log(qoshish(5)); //! NaN - Not a Number

// __________________________________________
function tanishtrir(ism, ...hobbilar) {
  return `${ism} sevimli mashg'ulotlari: ${hobbilar.join(", ")}larni sevadi!`
}  
// console.log(tanishtrir("Saidjon", "dasturlash", "fudbol", "roblox", "anime"));


