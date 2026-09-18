const track = document.getElementById("track")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const card = document.querySelectorAll(".card")
const cardlength = card.length // kartalar uzunligi


let hisoblagich = 0;

const cardWidth = 210;

nextBtn.addEventListener("click", () => {
    if(hisoblagich < cardlength) {
        hisoblagich++;
        updateCarousel();
    }
})
prevBtn.addEventListener("click", () => {
    if(hisoblagich > 0) {
        hisoblagich--;
        updateCarousel();
    }
})

function updateCarousel() {
    // Yo'lakni chapga surish (minus qiymat)
    const moveAmount = hisoblagich * cardWidth
    // CSS transform  orqali hatrakatlantirish
    track.style.transform = `translateX(${moveAmount}px)`
}
