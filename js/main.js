const accordianBtns = document.querySelectorAll('.accordian');
const navBtns = document.querySelectorAll('.nav-list a');

accordianBtns.forEach(accordianBtn => {
    accordianBtn.addEventListener('click', event => { 
        hideContent();
        event.target.nextElementSibling.classList.toggle('hidden');
    });
});

navBtns.forEach(navBtn => {
    navBtn.addEventListener('click', event => {
        removeActive();
        event.target.classList.add('active');
        const accordianElem = document.querySelector(`${event.target.getAttribute('href')} .content`);
        hideContent();
        accordianElem.classList.remove('hidden');
    });
});

function removeActive(){
    navBtns.forEach(navBtn => {
        if (navBtn.classList.contains('active')) {
            navBtn.classList.remove('active');
        }
    });
    
}
function hideContent() {
    const contents = document.querySelectorAll('.content');

    contents.forEach(content => {
        if (!content.classList.contains('hidden')) {
            content.classList.add('hidden');
        }
    });
}





