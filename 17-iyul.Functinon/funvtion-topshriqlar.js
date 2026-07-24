// ==================== OSON DARAJA (1 - 35) ====================

// 1-masala: [if-else] Ikkita sonni parametr sifatida qabul qilib,
// ulardan kattasini qaytaruvchi funksiya yozing.
function masala1(a, b) {
   if (a > b) {
    return "a soni katta"
   } else {
    return "b son katta"
   }
}
// console.log(masala1(2, 3));


// 2-masala: [if-else] anligini
// aniqlovchi funksiya yozing. Natija: "musbat", "manfiy" yoki "nol".
function masala2(son) {
    if (son > 0) {
        return "bu musbat son"
    }
     else if (son === 0) {
        return "bu son noll"
     }
     else {
        return "bu manfiy son"
     }
}
// console.log(masala2(-2));



// 3-masala: [if-else] Berilgan yosh bo'yicha kishi "bolalik" (0-12),
// "o'smirlik" (13-17), "kattalar" (18dan katta) toifasiga tegishli ekanligini aniqlang.
function masala3(yosh) {
    if (yosh < 13) {
        return "bolalik"
    } else if (yosh >= 13 && yosh <= 17) {
        return "o'smirlik"
    }
    else {
        return "18 yoshdan katta"
    }
}
// console.log(masala3(1));


// 4-masala: [for] 1 dan berilgan songacha bo'lgan barcha sonlar yig'indisini
// hisoblovchi funksiya yozing.
function masala4(son1) {
    let son = Number(prompt("Son kiriting"))
    let yigindi = 0
    for (let i = 1; i <= son; i++) {
        yigindi += i 
    }
    return yigindi
}
// console.log(masala4());



// 5-masala: [for] Berilgan sonning faktorialini hisoblovchi funksiya yozing.
function masala5(son) {
    let son1  = Number(prompt("Soni kiriting"))
    let kopaytma = 1
    for (let i = 1; i <= son; i++) {
        kopaytma *= i
    } 
    return kopaytma
}
// console.log(masala5());


// 6-masala: [for] 1 dan 100 gacha bo'lgan juft sonlarni massivga
// yig'ib qaytaruvchi funksiya yozing.
function masala6() {
    let son = 1
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i);
            
        }
    }
}
masala6()

// 7-masala: [while] Berilgan sonning raqamlar yig'indisini
// while sikli yordamida hisoblang. Masalan: 123 -> 1+2+3 = 6
function masala7(son) {}

// 8-masala: [while] Berilgan sondan boshlab 1 gacha teskari
// hisoblovchi (countdown) funksiya yozing, natijalarni massivga yozib qaytaring.
function masala8(son) {}

// 9-masala: [do-while] Foydalanuvchidan kiritilgan son (parametr) manfiy
// bo'lmaguncha uni kamaytirib borishni simulyatsiya qiluvchi funksiya yozing
// (har safar 1 ga kamaytiring, qiymatlarni massivga saqlang).
function masala9(son) {}

// 10-masala: [do-while] 1 dan boshlab kvadratlarini hisoblab,
// natija 50 dan katta bo'lguncha davom ettiruvchi funksiya yozing.
function masala10() {}

// 11-masala: [string] Berilgan matnning uzunligini qaytaruvchi funksiya yozing.
function masala11(matn) {}

// 12-masala: [string] Berilgan so'zni teskari tartibda qaytaruvchi funksiya yozing.
function masala12(soz) {}

// 13-masala: [string] Berilgan matnni katta harflarga o'giruvchi funksiya yozing.
function masala13(matn) {}

// 14-masala: [string] Berilgan matnda "salom" so'zi bor-yo'qligini
// tekshiruvchi funksiya yozing (true/false qaytarsin).
function masala14(matn) {}

// 15-masala: [array] Massiv elementlari yig'indisini hisoblovchi funksiya yozing.
function masala15(massiv) {}

// 16-masala: [array] Massivdagi eng katta elementni topuvchi funksiya yozing.
function masala16(massiv) {}

// 17-masala: [array] Massivdagi eng kichik elementni topuvchi funksiya yozing.
function masala17(massiv) {}

// 18-masala: [array] Massiv elementlarini ikkiga ko'paytirib,
// yangi massiv qaytaruvchi funksiya yozing.
function masala18(massiv) {}

// 19-masala: [if-else, for] Massivdagi juft sonlarni alohida
// massivga ajratuvchi funksiya yozing.
function masala19(massiv) {}

// 20-masala: [if-else, for] Massivdagi toq sonlarni alohida
// massivga ajratuvchi funksiya yozing.
function masala20(massiv) {}

// 21-masala: [object] Ism va yosh parametrlarini qabul qilib,
// { ism, yosh } ko'rinishida object qaytaruvchi funksiya yozing.
function masala21(ism, yosh) {}

// 22-masala: [object] Berilgan object ichida "ism" xususiyati
// mavjudligini tekshiruvchi funksiya yozing.
function masala22(obj) {}

// 23-masala: [object] Berilgan object'dagi barcha kalitlarni (key)
// massiv ko'rinishida qaytaruvchi funksiya yozing.
function masala23(obj) {}

// 24-masala: [if-else] Berilgan sonning juft yoki toqligini
// aniqlovchi funksiya yozing.
function masala24(son) {}

// 25-masala: [if-else] Uchta sonni solishtirib, eng kattasini
// qaytaruvchi funksiya yozing.
function masala25(a, b, c) {}

// 26-masala: [for] 1 dan 10 gacha ko'paytirish jadvalini
// (masalan 5 uchun: 5,10,15...) massiv ko'rinishida qaytaruvchi funksiya yozing.
function masala26(son) {}

// 27-masala: [while] Berilgan sonni 2 ga bo'lib, natija 1 dan
// kichik bo'lguncha bo'lish amalini necha marta bajarish
// mumkinligini hisoblovchi funksiya yozing.
function masala27(son) {}

// 28-masala: [string] Berilgan matndagi unli harflar (a, o, e, i, u, ...)
// sonini hisoblovchi funksiya yozing.
function masala28(matn) {}

// 29-masala: [string] Ikkita so'zni birlashtirib, orasiga bo'sh joy
// qo'yib qaytaruvchi funksiya yozing.
function masala29(soz1, soz2) {}

// 30-masala: [array] Massivda berilgan element mavjudligini
// tekshiruvchi funksiya yozing (true/false).
function masala30(massiv, element) {}

// 31-masala: [array] Massiv ichidagi elementlar sonini
// (uzunligini) qaytaruvchi funksiya yozing.
function masala31(massiv) {}

// 32-masala: [if-else] Berilgan baho (0-100) ga qarab harf baho
// ("A", "B", "C", "D", "F") qaytaruvchi funksiya yozing.
function masala32(baho) {}

// 33-masala: [for] Berilgan sonning barcha bo'luvchilarini
// topib, massiv ko'rinishida qaytaruvchi funksiya yozing.
function masala33(son) {}

// 34-masala: [do-while] 1 dan boshlab sonlarni sanab, ularning
// yig'indisi berilgan chegaradan oshguncha davom ettiruvchi
// funksiya yozing (necha ta son kerak bo'lganini qaytaring).
function masala34(chegara) {}

// 35-masala: [object] Ikkita object'ni birlashtirib, yangi
// object qaytaruvchi funksiya yozing.
function masala35(obj1, obj2) {}