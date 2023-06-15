const toggleLine = document.querySelectorAll('.toggle__line');
const toggleIcon = document.getElementById('toggle-icon');
const navMenu = document.getElementById('nav-menu');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
function toggleIconFunc()
{
    toggleLine.forEach(x => x .classList.toggle('toggle-clicked'));
    navMenu.classList.toggle('show-menu');
}



toggleIcon.addEventListener('click', toggleIconFunc);


let slideNum = 0;
/* ====== SLIDER ============== */
const sliderImages = document.querySelectorAll('.slider__img-img');

function slideNext()
{
    sliderImages.forEach((slide) =>
    {
        slide.classList.remove('active');
    })
    slideNum+=1;
    if(slideNum > (sliderImages.length -1))
    {
        slideNum = 0;
    }
    sliderImages[slideNum].classList.add('active');
}
function slidePrevious()
{
    sliderImages.forEach((slide) =>
    {
        slide.classList.remove('active');
    })
    slideNum-=1;
    if(slideNum < 0)
    {
        slideNum = sliderImages.length -1;
    }
    sliderImages[slideNum].classList.add('active');
}
nextButton.addEventListener('click', slideNext);
prevButton.addEventListener('click', slidePrevious);