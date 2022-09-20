const accordianBtns = document.querySelectorAll('.accordian');
const navBtns = document.querySelectorAll('.nav-list a');

accordianBtns.forEach(accordianBtn => {
    accordianBtn.addEventListener('click', event => {
        event.target.nextElementSibling.classList.toggle('hidden')
    });
});

navBtns.forEach(navBtn => {
    navBtn.addEventListener('click', event => {
        const accordianElem = document.querySelector(`${event.target.getAttribute('href')} .content`);

        if (accordianElem.classList.contains('hidden')) {
            accordianElem.classList.remove('hidden');
        }
    });
});

