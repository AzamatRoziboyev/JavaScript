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
// arr.splice(2, 2, 200, 100)
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
//   let yangiNarx n= arx * 1.15;
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
//*^chatgpt
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
// if (natija !== undefined) {
//     console.log(natija);

// } else {
//     console.log("topilmadi");

// }
// }

//*21-topshiriq (flat)
// let arr = [[85, 90], [70, [60, 65]], [95]];
// console.log(arr.flat(2));

//*  22-topshiriq (push)
// let arr = ["Fizika: 4"];
// arr.push("Matematika: 5", "Kimyo: 3")
// arr.forEach((arr, index) => {
//     console.log(arr);

// })

//* 23-topshiriq (findIndex)
// let arr = [{ nom: "stol", narx: 150000 }, { nom: "stul", narx: 45000 }, { nom: "shkaf", narx: 300000 }];
// let maxsulotlar = arr.findIndex(itms => itms.narx < 100000) 
// console.log(maxsulotlar);
// console.log(arr);
// console.log(arr.splice(0, 1,));

//*24-topshiriq (splice)
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let ortaIndex = Math.floor(arr.length / 2);
// arr.splice(ortaIndex, 0, 99);
// console.log(arr);

//*25-topshiriq (keys)
// let arr = ["x", "y", "z"];
// let key = [...arr.keys()]
// for (let i = key.length -1; i >=0; i--) {
//     console.log(key[i]);
    
// }

//* 26-topshiriq (pop)
//^chatgpt
// let sahifalar = ["bosh", "biz-haqimizda", "xizmatlar", "aloqa"];
// let birinchi = sahifalar.pop();
// let ikkinchi = sahifalar.pop();
// console.log("1-o'chirilgan sahifa:", birinchi);
// console.log("2-o'chirilgan sahifa:", ikkinchi);
// console.log("Qolgan sahifalar:", sahifalar);

//* 27-topshiriq (reduceRight)
// let sonlar = [1, 2, 3, 4];
// let natija = sonlar.reduceRight((acc, curr) => acc.concat(curr), []);
// console.log(natija);

//* 28-topshiriq (unshift)
//  let arr = ["hujjatlarni tayyorlash"];
//  arr.unshift("Eng muhim: byudjetni tasdiqlash")
//  console.log(arr);

//*29-topshiriq (values)
// let ballar = [55, 70, 43, 88, 91];
// let sanoq = 0;
// for (let ball of ballar.values()) {
//     if (ball < 60) {
//         sanoq++;
//     }
// }
// console.log(sanoq);
 
//*30-topshiriq (findLast)
// let arr = [200, -50, 300, -120, 400, -30];
// let natija = arr.findLast((n) => n < 0);
// console.log(natija);

//*  31-topshiriq (forEach)
// let harorat = [18, 22, 25, 30, 15];

// harorat.forEach((temp, index) => {
//     if (temp >= 25) {
//         console.log(`Kun ${index + 1}: issiq`);
//     } else {
//         console.log(`Kun ${index + 1}: salqin`);
//     }
// });

//*32-topshiriq (indexOf)
// let arr = ["qizil", "yashil", "ko'k"];
// let ranglar = arr.indexOf("sariq")
// if (arr !== "sariq") {
//     console.log("Sriq rang topilad");
    
// } else {
//     console.log("Sriq rang topilmadi");
    
// }

//*33-topshiriq (map)
//*^chatgpt
// let ismlar = ["ali", "vali", "guli"];
// let yangiIsmlar = ismlar.map(ism => {
//     return ism.charAt(0).toUpperCase() + ism.slice(1).toLowerCase();
// });
// console.log(yangiIsmlar);

//*  34-topshiriq (shift)
//  let arr = ["hujjat1.pdf", "hujjat2.pdf", "hujjat3.pdf"];
//  arr.shift()
//  console.log(arr.length);

//* 35-topshiriq (entries)
//^chatgpt
// let sotuvlar = [1200, 3400, 800];
// let engKatta = sotuvlar[0];
// let index = 0;
// for (let [i, qiymat] of sotuvlar.entries()) {
//     if (qiymat > engKatta) {
//         engKatta = qiymat;
//         index = i;
//     }
// }
// console.log("Eng katta qiymat:", engKatta);
// console.log("Indeksi:", index);

//*  36-topshiriq (lastIndexOf)
// let harakatlar = [0, 1, 0, 0, 1, 0, 1];
// let index = harakatlar.lastIndexOf(1);
// let natija = harakatlar.slice(index + 1);
// console.log("Oxirgi 1 ning indeksi:", index);

//*  37-topshiriq (filter)
//  let arr = [12, 5, 8, 130, 44, 3, 99];
//  let son = arr.filter(n => n >=10 && n <= 99)
//  console.log(son);

//*38-topshiriq (findLastIndex)
// let arr = ["info", "error", "info", "error", "warning"];
// let son = arr.findLastIndex(n => n === "error")
// console.log(son);

 //* 39-topshiriq (reduce)
//  let sozlar = ["JavaScript", "massiv", "metodlari"];
//  let yigindi = sozlar.reduce((sum, soz) => sum + soz.length,0);
//  console.log(yigindi);

//* 40-topshiriq (find)
//  let arr = [{ism:"Bek", staj:2}, {ism:"Anvar", staj:7}, {ism:"Dilnoza", staj:5}];
//  let natija = arr.find((arr) => arr.staj > 5);
//  console.log(natija);

 //* 41-topshiriq (flat)
//  let arr = [[1,2,3],[4,5,6],[7,8,9]];
//  let bir = arr.flat(Infinity) 
//  let yigindi = bir.reduce((add, n) => add + n, 0)
//  console.log(bir);
//  console.log(yigindi);

//*43-topshiriq (findIndex)
let arr = ["12345", "qwerty", "Str0ng!Pass", "abcdef"];
let parol = arr.findIndex(n => n > 8)
console.log(parol);

 
 
