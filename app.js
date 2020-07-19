let allBGImg = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

let nextBtn = document.querySelector(".nextBtn")
let prevBtn = document.querySelector(".prevBtn")
let bg = document.getElementById("bg");

let counter = 0;

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function nextSlide() {

    animateOpacity(bg);
    
    if(counter == allBGImg.length) {
        counter -= 1
    }

    counter++
    bg.style.backgroundImage = `url(img/${counter}.jpg)`

}

function prevSlide() {
    animateOpacity(bg)
    if(counter == 0) {
        counter = allBGImg.length + 1
    }

    counter--
    bg.style.backgroundImage = `url(img/${counter}.jpg)`

}


function animateOpacity(ele) {
    ele.animate(
        [
        {opacity: "0.1"},
        {opacity: '1.0'}
    ],
    {
        duration: 1000,
        fill: 'forwards'
    }
    );
}
