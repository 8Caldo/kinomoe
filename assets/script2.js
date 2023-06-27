const tabs_titles = document.querySelectorAll('.tabs-titles>li')
const tabs = document.querySelectorAll('.tabs>div')
let active_tab = 0;

const resetTabs = () => {
    tabs_titles.forEach((tab_t, index) => {
        tabs[index].style.display = 'none';
        tab_t.removeAttribute('class');
    });
};

resetTabs();
tabs[active_tab].style.display = 'block';
tabs_titles[active_tab].className = 'active';

tabs_titles.forEach((tab_t, index) => {
    tab_t.addEventListener('click', () => {
        active_tab = index;
        resetTabs();
        tabs[index].style.display = 'block';
        tab_t.className = 'active';
    });
});



const read = document.querySelector('.tab>p>span:first-child');
const more = document.querySelector('.tab>p>span:last-child');

more.style.display = 'none';

let Open = 0;

read.addEventListener('click', () => {
    if (!Open) {
        more.style.display = 'block';
        read.style.display = 'none';
        Open = 1;
    } else {
        more.style.display = 'none';  

        Open = 0;
    }
});



const menu = document.querySelector('.mobile-btn');
const submenu = document.querySelector('.second-mobile');
let is_open = 0;

menu.addEventListener('click', () => {
    if (!is_open) {
        submenu.style.display = 'block';
        is_open = 1;
    } else {
        submenu.style.display = 'none';
        is_open = 0;
    }
});
