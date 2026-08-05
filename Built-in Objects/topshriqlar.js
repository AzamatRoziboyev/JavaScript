//* 1-topshiriq Hozirgi sana va vaqtni konsolga chiqaruvchi dastur yozing.
const sana = new Date()
// console.log(sana);

//* 2-topshiriq Hozirgi yilni konsolga chiqaruvchi dastur yozing.
const hozirgiYil = new Date().getUTCFullYear()
// console.log(hozirgiYil);

//*3-topshiriq Hozirgi oy raqamini (0-11 oralig'ida) konsolga chiqaruvchi dastur yozing.
const hozirgiOy = new Date().getMonth()
// console.log(hozirgiOy);

//* 4-topshiriq Hozirgi kun raqamini (1-31 oralig'ida) konsolga chiqaruvchi dastur yozing.
const hozirgiKun = new Date().getDay()
// console.log(hozirgiKun);

//* 5-topshiriq Hozirgi sanani ISO formatda (YYYY-MM-DDTHH:mm:ss.sssZ) konsolga chiqaruvchi dastur yozing.
const horirgiSana = new Date().toDateString()
// console.log(horirgiSana);

//* 6-topshiriq 1970-yil 1-yanvardan hozirgi vaqtgacha bo'lgan millisekundlar sonini konsolga chiqaruvchi dastur yozing.
const hozirgiVaxt = Date.now()
// console.log(hozirgiVaxt);

//* 7-topshiriq Hozirgi sanani o'zbek tilida ko'rsatuvchi dastur yozing. (Intl.DateTimeFormat dan foydalaning)
const uzFormat = new Intl.DateTimeFormat("uz-UZ");
// console.log(uzFormat.format(sana));

//* 8-topshiriq Hozirgi vaqtga 5 soat qo'shib, yangi vaqtni konsolga chiqaruvchi dastur yozing.
const hozirgiSoat = new Date().getHours()
// console.log(hozirgiSoat +5);

//&Math Object (9-19 topshiriqlar)
//* 9-topshiriq Math.PI yordamida Pi sonini konsolga chiqaring.
const pi = Math.PI
// console.log(pi);

//* 10-topshiriq 0 va 1 oralig'ida tasodifiy son hosil qiling va konsolga chiqaring.
const random = Math.random(0, 1)
// console.log(random);

//* 11-topshiriq 4.7 sonini eng yaqin butun songa yaxlitlang va natijani konsolga chiqaring.
const yaxlitlash = Math.round(4.7)
// console.log(yaxlitlash);

//* 12-topshiriq 4.9 sonini pastga (floor) yaxlitlang va natijani konsolga chiqaring.
const pastga = Math.floor(4.9)
// console.log(pastga);

//* 13-topshiriq 4.1 sonini yuqoriga (ceil) yaxlitlang va natijani konsolga chiqaring.
const yuqoriga = Math.ceil(4.1)
// console.log(yuqoriga);

//* 14-topshiriq [5, 10, 3, 8] massividagi eng katta sonni toping va konsolga chiqaring.
const max = Math.max(5, 10, 3, 8)
// console.log(max);

//* 15-topshiriq [5, 10, 3, 8] massividagi eng kichik sonni toping va konsolga chiqaring.
const min = Math.min(5, 10, 3, 8)
// console.log(min);

//* 16-topshiriq -7 sonining absolut (modul) qiymatini toping va konsolga chiqaring.
const abs = Math.abs(-7)
// console.log(abs);

//* 17-topshiriq 2 ning 3-darajasini hisoblang va konsolga chiqaring.
const daraja = Math.pow(2, 3)
// console.log(daraja);

//* 18-topshiriq 16 ning kvadrat ildizini toping va konsolga chiqaring.
const kvadrat = Math.sqrt(16)
// console.log(kvadrat);

//* 19-topshiriq 27 ning kub ildizini toping va konsolga chiqaring.
const kub = Math.cbrt(27)
// console.log(kub);

//* 20-topshiriq JavaScriptdagi maksimal xavfsiz butun sonni (MAX_SAFE_INTEGER) konsolga chiqaring.
const maksimal = Number.MAX_SAFE_INTEGER
// console.log(maksimal);

//* 21-topshiriq 42 soni butun son ekanligini tekshiring va natijani (true/false) konsolga chiqaring.
const butunSon = Number.isInteger(42)
// console.log(butunSon);

//* 22-topshiriq "salom" matnini Number() yordamida songa o'girib, natija NaN ekanligini tekshiring va konsolga chiqaring.
const aa = Number.isNaN(NaN)
// console.log(aa);
