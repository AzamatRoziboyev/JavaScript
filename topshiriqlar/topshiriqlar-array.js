//* 1-topshiriq (flat)
// let arr = [1, [2, [3, [4, 5]]], 6]
// console.log(arr.flat(3));

//* 2-topshiriq (push)
// let arr = []
// arr.push('anor','uzum','olma')
// console.log(arr);
// console.log(arr.length);

//*3-topshiriq (findIndex)
// let arr = [{ism:"Ali", ball:75}, {ism:"Vali", ball:40}, {ism:"Guli", ball:90}];
// let talabalar = arr.findIndex((talabalar) => talabalar.ball < 50) 
// console.log(talabalar);

//*4-topshiriq (splice)
// let arr = [10, 20, 30, 40, 50];
// arr.splice(1, 2, 200, 100)
// console.log(arr);

//*5-topshiriq (keys)
// let arr = ["olma", "nok", "shaftoli", "gilos"];
// for (let key of arr.keys()) {
//     if (key % 2 === 0)
//   console.log(key, arr[key]); 

// }

//* 6-topshiriq (pop)
// let arr = []
// arr.push(1,2,3,4,5,)
// let yigindi = arr.pop() + arr.pop() + arr.pop();
// console.log("Yigindi:", yigindi);

//*7-topshiriq (reduceRight)
// let arr = ["JS", "dan", "salom"];
// let natija = arr.reduceRight((acc, item) => acc + " " + item);
// console.log(natija);

//*8-topshiriq (unshift)
// let arr = ['Vali', 'Guli']
// arr.unshift("Ali")
// console.log(arr);

//* 9-topshiriq (values)
// let arr = [4, 8, 15, 16, 23, 42];
// for (let val of arr.values()) {
//     if (val % 2 === 0) 
//         console.log(val);
        
// }

//* 10-topshiriq (findLast)
// let arr = [12, 5, 8, 21, 3, 17];
// let son = arr.findLast((n) => n  % 2 === 0)
// console.log(son);

//*  11-topshiriq (forEach)
// let narxlar = [1000, 2500, 3200, 4700];

// narxlar.forEach(narx => {
//   let yangiNarx = narx * 1.15;
//   console.log(`Narx: ${yangiNarx} so'm`);
// });

//* 12-topshiriq (indexOf)
// let arr = ["a", "b", "c", "b", "d", "b"];
// console.log(arr.indexOf("b"));
//^  chatgpt niki
// let harflar = ["a", "b", "c", "b", "d", "b"];

// let count = 0;
// let index = harflar.indexOf("b"); // birinchi "b" ni topadi

// while (index !== -1) {
//     count++;
//     index = harflar.indexOf("b", index + 1); // keyingi "b" ni qidiradi
// }

// console.log("b harfi", count, "marta uchradi.");

//* 13-topshiriq (map)
// let temperaturalar = [0, 20, 37, 100];
// let farengeyt = temperaturalar.map(temp => temp * 9 / 5 + 32);
// console.log(farengeyt);

//*  14-topshiriq (shift)
//^chatgpt
    // let navbat = ["mijoz1", "mijoz2", "mijoz3", "mijoz4"];
    // while (navbat.length > 0) {
    //     let mijoz = navbat.shift(); 
    //     console.log(`${mijoz} xizmat ko'rmoqda`);
    // }

//* 15-topshiriq (entries)
// let arr = ["osh", "manti", "lag'mon"];
// for (let [index, taom] of arr.entries()) {
//     console.log(`${index + 1}-taom: ${taom}`);
// }

//* 16-topshiriq (lastIndexOf)
// let arr = ["login", "click", "scroll", "click", "logout", "click"];
// console.log(arr.lastIndexOf("click"));

//*  17-topshiriq (filter)
// let foydalanuvchilar = [{ism:"Ali", faol:true}, {ism:"Vali", faol:false}, {ism:"Guli", faol:true}];
// let faol = foydalanuvchilar 
// .filter (foydalanuvchilar => foydalanuvchilar.faol)
// .map (foydalanuvchilar => foydalanuvchilar.ism)
// console.log(faol);

//* 18-topshiriq (findLastIndex)
// let arr = [3, 5, 2, 4, 5, 1];
// let boholar = arr.findLastIndex((n) => n > 4)
// console.log(boholar);

//* 19-topshiriq (reduce)
//^chatgpt
// let savat = [
//     { nom: "non", narx: 5000, soni: 2 },
//     { nom: "sut", narx: 8000, soni: 1 }
// ];
// let jami = savat.reduce((sum, mahsulot) => {
//     return sum + (mahsulot.narx * mahsulot.soni);
// }, 0);
// console.log(jami);

//*20-topshiriq (find)
// let arr = [2, 4, 6, 7, 8, 10];
// let natija = arr.find((n) => n % 2 !== 0);{
//     console.log(natija);
//     // if (natija !== undefined) {
//     //     console.log(natija);
        
//     // } else {
//     //     console.log("topilmadi");
        
//     // }
// }









