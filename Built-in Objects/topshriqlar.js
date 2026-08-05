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
