const {log, dir} = console;

const cardImg = document.querySelectorAll('.card__img img');
const cardDescription = document.querySelectorAll('.card__description');
const storeItems = document.querySelectorAll('.store__item');
const soundTrackImage = document.querySelector('.soundtrack__img-img');
const soundTrackDescription = document.querySelector('.soundtrack__info');

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>
        {
            entry.target.classList.toggle('active', entry.isIntersecting);
            if(entry.isIntersecting) observer.unobserve(entry.target);
        })
});



cardImg.forEach(card => {
    observer.observe(card)
});

cardDescription.forEach(element => {
    for(const node of element.children)
    {
        observer.observe(node);
    }
})

storeItems.forEach(item => 
    {
        observer.observe(item);
    })
observer.observe(soundTrackImage);

for(const node of soundTrackDescription.children)
{
    observer.observe(node);
}
/* function scrollCardImgReveal()
{
    const scrollY = window.scrollY;
    for(let i = 1; i < cardImg.length; i++)
    {
        const top = cardImg[i].offsetTop;
        const height = cardImg[i].offsetHeight;
        if(scrollY > (top - height*3 ))
        {
            cardImg[i].classList.add('active');
        }
    }
}

function scrollDescriptionReveal()
{
    const scrollY = window.scrollY;
    for(let i = 1; i < cardDescription.length; i++)
    {
        let children = cardDescription[i].children;
        for(const node of children)
        {
            const top = node.offsetTop;
            const height = node.offsetHeight;
            if(scrollY > top - 7*height)
            {
                node.classList.add('active');
               
            } 
        }
       
    }
}
function storeItemReveal()
{
    const scrollY = window.scrollY;
    storeItems.forEach(item =>
        {
            const top = item.offsetTop;
            const height = item.offsetHeight;
            if(scrollY > top - 4*height)
            {
                item.classList.add('active');
            }
        })
}

window.addEventListener('scroll', scrollCardImgReveal);
window.addEventListener('scroll', scrollDescriptionReveal);
window.addEventListener('scroll', storeItemReveal); */