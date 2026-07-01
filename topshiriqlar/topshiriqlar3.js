// for (let i = 0; i <= 10; i++) {
//     console.log(i);

// }
// *whileda faqat juft sonlarni chiqarish {2}
// let i = 1
// while (i <= 20) {
//     if (i % 2 === 0) {
//         console.log(i);

//     }
//     i++
// }
// **foydalanuvchi 0 yozmaguncha kiritilmasin {3}
// let son = 0
// do {
//     son = parseInt(prompt("Soni kiriting"))
// } while (son !== 0)
//     console.log(0);
//* Berilgan massivning barcha elementlarini for yordamida chiqaring {4}
// let arr = ["Shoxruz", 12, "46", false, true, undefined, Boolean, Number, String]    
// for (let i of arr) {
//     console.log(i);

// }
//*Berilgan massivdagi musbat sonlar nechta ekanligini hisoblang (for) {5}
// let arr = [-1, 1, 3, -12, 6, 4, -22, 6]
// let musbat = []
// for(let i of arr) {
//     if (i > 0) {
//         musbat.push(i)

//     }
// }
// console.log(musbat.length);
//*1 dan 100 gacha bo'lgan barcha sonlarning yig'indisini for yordamida toping {6}
// let sum = 0
// for (let i = 1; i <= 100; i++) {
//     sum += i
// }
// console.log(sum);
//* Foydalanuvchi kiritgan sonning faktorialini for yordamida hisoblang {7}
// let n = parseInt(prompt("sonni kititing"))
// let k = 1 
// for (let i = 1; i <= n; i++) {
//         k *= i
// }
// console.log(k);
// * 1 dan 50 gacha bo'lgan toq sonlarning yig'indisini for yordamida toping {11}
// let sum = 0
// for (let i = 1; i < 50; i++) {
//     if (i % 2 !== 0)
//         console.log(i)
//     i++
//     sum += i    
// }
// console.log(sum);

//*1 dan 15 gacha bo'lgan sonlarning kvadratini for yordamida chiqaring {13}
// for (let i = 1; i <= 15; i++) {
//     console.log(i**2);

// }

//*Foydalanuvchi -1 raqamini kiritguncha sonlarni qabul qilishni davom ettiring (do/while) {16}
// let son = -1
// do {
//     son = parseInt(prompt("Soni kiriting"))
// } while (son !== -1)
//     console.log(-1);

//*Berilgan massivning 2-indeksidagi elementni if yordamida chiqaring {17}
// let massiv = [10, 20, 30, 40, 50];

// if (massiv[2] !== undefined) {
//     console.log(massiv[2]); 
// }x`

//*Berilgan massivning birinchi va oxirgi elementlarini if yordamida almashtiring {19}// let arr = [10, 20, 30, 40, 50];
//^{1-usul}
// let oxiri = arr.pop()
// let boshi = arr.shift()
// arr.push(boshi)
// arr.unshift(oxiri)
// console.log(arr);
//^{2- usul}
// let massiv = [10, 20, 30, 40, 50];

// if (massiv.length > 1) {
//     let temp = massiv[0];
//     massiv[0] = massiv[massiv.length - 1];
//     massiv[massiv.length - 1] = temp;
// }
// console.log(massiv);

//*Berilgan massiv elementlarining o'rtacha qiymatini for yordamida toping {21}
// let arr = [2, 4, 6, 8, 10]
// let sum = 0;
//  for (let i = 0; i < arr.length; i++) {
//     sum +=arr[i]
//  }
//  let average = sum / arr.length
//  console.log("ortacha qiymat", average);
//* Berilgan massivdagi barcha musbat sonlarning yig'indisini for yordamida toping {23}
//& ozimki
// let arr = [1,2,3,4,5,6,7,]
// let sum = 0;
// for (let i of arr) {
//     if (i > 0) {
//              console.log(i)
//               sum +=  i
//     }
// }
// console.log(sum);
//& chatgpt niki
// let arr = [1,2,3,4,5,6,7];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         sum += arr[i];
//     }
// }

// console.log("Musbat sonlar yig'indisi:", sum);

//* Berilgan massivda 5 raqami bor yoki yo'qligini for va if yordamida tekshiring {25}
// let arr = [2, 7, 1, 5, 9];
// let found = false;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 5){
//          found = true;
//         break
//     } 
// }
// if (found) {
//     console.log("5 Raqami bor");

// } else {
//     console.log("5 raqami yoq");

// }

//* 1 dan 20 gacha bo'lgan sonlarning kubini while yordamida chiqaring {26}
// let arr = 1
// while (arr <= 20) {
//     console.log(arr ** 3);
//     arr++

// }

//* Foydalanuvchi kiritgan sonning juft yoki toq ekanligini if yordamida aniqlang {27}
// let arr =prompt("sonni kiriting!")
// if (arr > 0) {
//     console.log("bu son musbat");
    
// }  
// else {
//     console.log("bu son manfiy");
    
// }


// let sonlar = [1, 2, 3, 4, 5, 6];
// let juftlar = sonlar.filter((n) => n % 2 !== 0);
// console.log(juftlar)


let sonlar = [1, 2, 3, 4, 5, 6,7,8,9,10];
let yigindi = sonlar.reduce((yigindi, n) => yigindi + n, 0);
console.log(yigindi); 




