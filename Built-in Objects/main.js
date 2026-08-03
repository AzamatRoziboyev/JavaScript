
//* 1) Argumentsiz - joriy sana va vaqtni oladi
const hozir = new Date();
// console.log(hozir); // Mon Aug 03 2026 16:31:45 GMT+0500 (Uzbekistan Standard Time)

//* 2) Millisekundlar soni orqali (Unix Epoch'dan boshlab)
const sana1 = new Date(0); // 1970-01-01T00:00:00.000Z
const sana2 = new Date(1000 * 60 * 60); // Epoch'dan 1 soat keyin
// console.log(sana1)
// console.log(sana2)

//* 3) Sana string (ISO 8601 formatida tavsiya etiladi)
const sana3 = new Date("2026-08-03"); // faqat sana - UTC vaqt bo'yicha 00:00:00
const sana4 = new Date("2026-08-03T14:30:00"); // sana + vaqt
const sana5 = new Date("2026-08-03T14:30:00Z"); // "Z" - UTC ekanini bildiradi

// console.log(sana3)
// console.log(sana4)
// console.log(sana5)


//* 4) Yil, oy, kun, soat, minut, sekund, millisekund (alohida argumentlar)
// DIQQAT: oy 0'dan boshlanadi! (0 = Yanvar, 11 = Dekabr)
const sana6 = new Date(2026, 7, 3, 14, 30, 50, 0); // 2026-yil, 8-oy (indeks 7), 3-kun, 14:30

// console.log(sana6); // 2026-yil 3-avgust, 14:30:00


// *5) Faqat yil va oy (qolganlari default: kun=1, soat=0, minut=0...)
const sana7 = new Date(2026, 0); // 2026-yil 1-yanvar, 00:00:00

// console.log(sana7)

//* 6  Yaxlitlash metodlari — round(), floor(), ceil(), trunc()
console.log(Math.round(4.4)); // 4 - eng yaqin butun songa yaxlitlaydi (0.5 va undan yuqori - yuqoriga)
console.log(Math.round(4.5)); // 5
console.log(Math.round(-4.5)); // -4 (diqqat: manfiy sonlarda -4.5 -> -4, ya'ni yuqoriga yaxlitlanadi!)

console.log(Math.floor(4.9)); // 4 - har doim PASTGA yaxlitlaydi (kichraytiradi)
console.log(Math.floor(-4.1)); // -5 - manfiy sonlarda ham "pastga" (kichikroq tomonga)

console.log(Math.ceil(4.1)); // 5 - har doim YUQORIGA yaxlitlaydi (kattalashtiradi)
console.log(Math.ceil(-4.9)); // -4 - manfiy sonlarda ham "yuqoriga" (kattaroq tomonga)

console.log(Math.trunc(4.9)); // 4 - kasr qismini shunchaki "kesib tashlaydi" (yaxlitlamaydi)
console.log(Math.trunc(-4.9)); // -4 - Math.floor'dan farqli, faqat kasr qismini olib tashlaydi

// &round, floor, ceil, trunc farqini bitta jadvalda ko'rish:
console.log(Math.round(2.5), Math.floor(2.5), Math.ceil(2.5), Math.trunc(2.5)); // 3 2 3 2
console.log(
    Math.round(-2.5),
    Math.floor(-2.5),
    Math.ceil(-2.5),
    Math.trunc(-2.5),
); // -2 -3 -2 -2