//* 1 topshiriq
// let arr = "salom dunyo"
// let kattaHarf = arr.toUpperCase("salom dunyo")
// console.log(kattaHarf);

//* 2 topshiriq
// let arr = "JavaScript"
// console.log(arr.length);

//* 3 topshiriq
// let arr =  "Dasturlash"
// console.log(arr.indexOf("r"));

//* 4 topshiriq
// let arr = "Hello world"
// console.log(arr.startsWith("Hello"));

//* 5 topshiriq
// let arr = "WEB DASTURLASH"
// let kichikHarf = arr.toLowerCase("WEB DASTURLASH")
// console.log(kichikHarf);

//* 6 topshiriq
// let arr = "Kompyuter"
// console.log(arr.charAt(3));

//* 7 topshiriq
// let arr = "   Salom   "
// console.log(arr.trim());
 
//* 8 topshiriq
// let arr = "Assalomu alaykum!"
// console.log(arr.endsWith("!"));

//* 9 topshiriq
// let arr = "Men js o'rganyapman"
// console.log(arr.includes("js"));

//* 10 topshiriq
// let arr =  "ha"
// console.log("ha".repeat(3));

//*11 topshiriq
// let ism = "Ali";
// let familiya = "Karimov";
// let toliqIsm = ism.concat(" ", familiya);
// console.log(toliqIsm);

//* 12 topshiriq
// let arr = "javascript"
// let son = arr[0].toUpperCase() + arr.slice(1)
// console.log(son);

//* 13 topshiriq
// let arr = "Men dastur yozaman"
// console.log(arr.split(" "));

//* 14 topshiriq
// let arr = "salom"
// console.log(arr.replaceAll("a", "o"));

//* 15 topshiriq
// let arr = "Dasturlash"
// console.log(arr.slice(6));

//* 16 topshiriq 
// let arr = "Hello world"
// console.log(arr.slice(6));

//* 17 topshiriq
// let arr = "ali@gmail.com"
// console.log(arr.slice(4));

//* 18 topshiriq
// let arr = "JavaScript"
// console.log(arr.split("").reverse().join(""));

//* 19 topshiriq
// let arr = "Dasturlash"
// console.log(arr.length > 10);

//* 20 topshiriq
// let arr = "Men olma yedim"
// console.log(arr.replaceAll("olma", "anor"));

//* 21 topshiriq
//^chatgpt
// let matn = "Narx: 15000 so'm";
// let raqamlar = matn.match(/\d+/g);
// console.log(raqamlar);

//* 22 topshiriq
//^chatgpt
// let sozlar = ["Men", "o'qiyman"];
// let gap = sozlar.join(" ");
// console.log(gap);

//* 23 topshiriq
// let arr = "Dasturlash"
// console.log(arr.slice("2", "7"));

//* 24 topshiriq 
//^chatgpt
// let matn = "Salom123";
// let natija = /^[A-Za-z]+$/.test(matn);
// console.log(natija);

//* 25 topshiriq
// let arr = "   JavaScript   "
// console.log(arr.trim());

//* 26 topshiriq
// let arr = "document.pdf"
// console.log(arr.slice(9));

//* 27 topshiriq
// let arr = "abc"
// console.log("abc".padStart(10, "*"));

//* 28 topshiriq
// let arr =  "Men JS o'rganyapman"
// console.log(arr.lastIndexOf("JS"));

//* 29 topshiriq
// let arr = "bir ikk uch"
// console.log(arr.replaceAll(" ", ","));

//* 30 topshiriq
// let arr = "salom"
// console.log(arr.split(""));

//* 31 topshiriq
// let arr =  "https://google.com"
// console.log(arr.startsWith("https://"));

//* 32 topshiriq
// let arr = "Mening Blog Postim"
// console.log(arr.toLowerCase().replaceAll(" ", "-"));

//* 33 topshiriq
// let arr = "JavaScript"
// let natija = arr.slice("0", "4")
// let natija1 = arr.substring("0", "4") 
// console.log("slice:", natija);
// console.log("substring:", natija1);

//* 34 topshiriq
// let arr = "Bu bir gap"
// console.log(arr.split(" ").length);

//* 35 topshiriq
//^chatgpt
// let matn = "a1b2c3";
// let natija = matn.replace(/\D/g, "");
// console.log(natija);

//* 36 topshiriq
// let arr = "123"
// console.log(arr.padEnd("5", "."));

//* 37 topshiriq
// let matn = "jAVAsCRIPT";
// console.log(matn.charAt(0).toUpperCase() + matn.slice(1).toLowerCase());

//* 38 topshiriq 
// let matn = "abc";
// let teskari = matn.split("").reverse().join("");
// let natija = teskari.split("").reverse().join("");
// console.log(natija);

//* 39 topshiriq
// let arr = "salom"
// console.log(arr.split("a"));

//* 40 topshiriq
//^chatgpt
// let matn = "aabbcc";
// let sanoq = {};
// let engKop = "";
// let max = 0;
// for (let harf of matn) {
//     sanoq[harf] = (sanoq[harf] || 0) + 1;

//     if (sanoq[harf] > max) {
//         max = sanoq[harf];
//         engKop = harf;
//     }
// }
// console.log(engKop);

//* 41 topshiriq
// let title = "salom dunyo uzbekiston";
// let titled = title
//   .split(" ")
//   .map((w) => w[0].toUpperCase() + w.slice(1))
//   .join(" ");
// console.log(titled)

//* 42 topshiriq 
// let arr = "kiyik"
// let bb = arr.split("").reverse().join("")
// console.log(arr === bb);

//* 43 topshiriq
//^ chatgpt
// let matn = "salom";
// let natija = matn.replace(/[aeiou]/g, "");
// console.log(natija);

//* 44 topshiriq
// let arr = "men dastur yozaman"
// console.log(arr.split(" ").reverse().join(" "));

//* 45 topshiriq
//^chatgpt
// let matn = "a1b2c3d4";
// let raqamlar = matn.match(/\d/g);
// let yigindi = raqamlar.reduce((sum, raqam) => sum + Number(raqam), 0);
// console.log(yigindi);

//* 46 topshiriq
//^chatgpt
// let matn = "men dastur yozaman";
// let natija = matn
//   .split(" ")
//   .map((soz, index) => {
//     if (index === 0) {
//       return soz.toLowerCase();
//     }
//     return soz.charAt(0).toUpperCase() + soz.slice(1).toLowerCase();
//   })
//   .join("");
// console.log(natija);

//* 47 topshiriq
//^chatgpt
// let matn = "bu bu gap gap takror";
// let sozlar = matn.split(" ");
// let sanoq = {};
// let natija = [];
// for (let soz of sozlar) {
//     sanoq[soz] = (sanoq[soz] || 0) + 1;
// }
// for (let soz in sanoq) {
//     if (sanoq[soz] > 1) {
//         natija.push(soz);
//     }
// }
// console.log(natija);

//* 48 topshiriq
// let arr = "<h1>Salom</h1><p>Dunyo</p>"
// console.log(arr.replace(/\<[^>]*\>/g, ""));

//* 49 topshiriq
// let matn = "A";
// let kod = matn.charCodeAt(0);
// console.log(kod)

//* 50 topshriq
// let matn = "men dasturlashni o'rganyapman";
// let engUzun = matn
//   .split(" ")
//   .reduce((uzun, soz) => soz.length > uzun.length ? soz : uzun);
// console.log(engUzun)44

//* 51 topshiriq
// let arr = "Men 25 yoshdaman, 2026 yil"
// let a = arr.match(/\d+/g)
// console.log(a);

//* 52 topshiriq
//^chatgpt
// let matn = "myVariableName";
// let snakeCase = matn.replace(/[A-Z]/g, harf => "_" + harf.toLowerCase());
// console.log(snakeCase);;

//* 53 topshiriq
// let arr = "men dastur yozaman"
// let a = arr.split(" ")
// for (let i of a) {
//     console.log(i.length);
    
// }

//* 54 topshiriq
// let arr = "salom dunyo"
// console.log(arr.replaceAll(" ", "").length);

//* 55 topshiriq
// let arr = "a|b|c|d"
// console.log(arr.replaceAll("|", "").split(""));

//* 56 topshiriq {e harflarni indeksni topish}
// let matn = "elephant";
// let indekslar = [];
// let index = matn.indexOf("e");
// while (index !== -1) {
//     indekslar.push(index);
//     index = matn.indexOf("e", index + 1);
// }
// console.log(indekslar);

//* 57 topshiriq
// let arr = "123"
// console.log(arr.padEnd("5", "#"));

//* 58 topshiriq
// let arr = "JavaScript"
// let a = arr.charAt("2") + arr.charAt(4)
// console.log(a);

//* 59 topshiriq 
//^chatgpt
// let matn = "HeLlO";
// let natija = "";
// for (let i = 0; i < matn.length; i++) {
//     if (matn[i] === matn[i].toUpperCase()) {
//         natija += matn[i].toLowerCase();
//     } else {
//         natija += matn[i].toUpperCase();
//     }
// }
// console.log(natija);

//* 60 topshiriq
//^chatgpt
// let matn = "salom";
// let natija = matn.match(/[aeiouo']/g).join("");
// console.log(natija);

//* 61 topshiriq
// let arr = "salom"
// console.log(arr === arr.toLowerCase());

//* 62 topshiriq
// let arr = "men dastur yozaman"
// let a = arr.split(" ");
// console.log(a.length, a);

//* 63 topshiriq 
// let arr =  "salem"
// console.log(arr.replaceAll("e", "a").replace("a", "e"));

//* 64 topshiriq 
// let matn = "abcdefghi";
// let natija = [];
// for (let i = 0; i < matn.length; i += 3) {
//     natija.push(matn.slice(i, i + 3));
// }
// console.log(natija);

//* 65 topshiriq
// let arr = "Men 25 yoshdaman"
// console.log(arr.replaceAll("25", "XX"));

//* 66 topshiriq
// let arr = "**salom**"
// console.log(arr.slice(2, 7));

//* 67 topahiriq
// let matn = "salom";
// for (let i = 0; i < matn.length; i++) {
//   console.log(matn[i]);
// }

//* 68 topshiriq
// let arr ="javascript va javascript"
// let a = arr.split("javascript").length -1
// console.log(a);

//* 69 topshiriq
// let arr = "Salom Dunyo"
// console.log(arr.toLowerCase().replaceAll(" ", ""));

//* 70 topshiriq
// let arr = "a1b2c3"
// console.log(arr.match(/\d+/g).join(""));

//* 71 topshiriq
// let arr = "banana olma uzum"
// console.log(arr.split(" "));

//* 72 topshiriq
//^ chatgpt
// let matn = "men dastur yozaman";
// let natija = matn
//   .split(" ")
//   .map(soz => soz[0] + soz[soz.length - 1]);
// console.log(natija);

//* 73 topshiriq
// let arr = "salom dunyo"
// let a = arr.split(" ").length -1
// console.log(a);

//* 74 topshiriq
// let arr = "salom dunyo"
// console.log(arr.toUpperCase());

//* 75 topshiriq
// let arr = "cba"
// let a = arr.split("").sort().join("")
// console.log(a);

//* 76 topshiriq 
//^ chatgpt
// let natija = "";
// for (let i = 1; i < matn.length; i += 2) {
//     natija += matn.charAt(i);
// }
// console.log(natija); 

//* 77 topshiriq
// let arr = "salom dunyo"
// console.log(arr.replaceAll(" ", "|"));

//* 78 toshiriq
// let arr = "12"
// console.log(arr.padStart("4", "0"));

//* 79 topshiriq
// let arr ="salom dunyo"
// console.log(arr.replaceAll(" ", "").length);

//* 80 topshiriq
//^ chatgpt
// let matn = "hello";
// let natija = [];
// for (let i = 0; i < matn.length; i++) {
//     if (matn[i] === "l") {
//         natija.push(i);
//     }
// }
// console.log(natija);

//* 81 topshiriq
let arr =  "Bugun (dushanba) kuni (dars) bor"
