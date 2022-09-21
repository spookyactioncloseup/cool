const accordianBtns = document.querySelectorAll('.accordian');
const navBtns = document.querySelectorAll('.main-nav a');
const contents = document.querySelectorAll('.content');


accordianBtns.forEach(btn => {
    btn.addEventListener('click', event => {
        hideContent();
        event.target.nextElementSibling.classList.toggle('hidden');
        event.target.classList.add('open');
        navBtns.forEach(navBtn => {
            if (`#${event.target.getAttribute('data-nav')}` === navBtn.getAttribute('href')) {
                navBtn.classList.add('active');
            }
        });
    });
});

navBtns.forEach(navBtn => {
    navBtn.addEventListener('click', event => {
        removeActive();
        const accordianElem = document.querySelector(`${event.target.getAttribute('href')} .content`);
        hideContent();
        accordianElem.classList.remove('hidden');
        accordianElem.previousElementSibling.classList.add('open');
        event.target.classList.add('active');
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
    accordianBtns.forEach(btn => {
        if (btn.classList.contains('open')) {
            btn.classList.remove('open');
        }
    });

    navBtns.forEach(btn => {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active');
        }
    });

    contents.forEach(content => {
        if (!content.classList.contains('hidden')) {
            content.classList.add('hidden');
        }
    });
}





