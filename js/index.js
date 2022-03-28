const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');

const setActive = (i) => {
    for (slide of slides) {
        slide.classList.remove('active');
        slides[i].classList.add('active');

        // добавление класса active к изображениям слайда
    }

    for (dot of dots) {
        dot.classList.remove('active');
        dots[i].classList.add('active');

        // добавление класса active к индикаторам 
    }
}

for (let j = 0; j < dots.length; j++) {
    dots[j].addEventListener('click', () => {
        setActive(j);
    })
};
// переключение индикаторов навигации слайда