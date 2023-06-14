const toggleLine = document.querySelectorAll('.toggle__line');
const toggleIcon = document.getElementById('toggle-icon');
const navMenu = document.getElementById('nav-menu');
function toggleIconFunc()
{
    toggleLine.forEach(x => x .classList.toggle('toggle-clicked'));
    navMenu.classList.toggle('show-menu');
}



toggleIcon.addEventListener('click', toggleIconFunc);
