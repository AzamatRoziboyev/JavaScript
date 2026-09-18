const track = document.getElementById("track")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")

let hisoblagich = 0;

const cardWidth = 210;

nextBtn.addEventListener("click", () => {
    if(hisoblagich < 3) {
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

