const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

const toTop = document.getElementById('toTop');

const toggle = document.getElementById('toggle');
const knob = document.getElementById('knob');
const labelMonth = document.getElementById('labelMonth');
const labelYear = document.getElementById('labelYear');

// БУРГЕР-МЕНЮ

burger.addEventListener('click', () => {
    nav.classList.toggle('hidden');
});

// КНОПКА НАВЕРХ

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        toTop.classList.remove('hidden');
    } else {
        toTop.classList.add('hidden');
    }
});

toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// КНОПКА ПЕРЕКЛЮЧАТЬ ЦЕНЫ

let isYear = false;

const prices = {
    month: { basic: 200, standart: 350, pro: 800 },
    year: { basic: 150, standart: 250, pro: 600 }
};

function updatePrices() {
    const data = isYear ? prices.year : prices.month;

    document.getElementById('priceBasic').textContent = data.basic;
    document.getElementById('priceStandart').textContent = data.standart;
    document.getElementById('pricePro').textContent = data.pro;
}

toggle.addEventListener('click', () => {
    isYear = !isYear;

    knob.style.transform = isYear ? 'translateX(80px)' : 'translateX(0)';

    labelMonth.classList.toggle('font-bold', !isYear);
    labelMonth.classList.toggle('font-normal', isYear);

    labelYear.classList.toggle('font-bold', isYear);
    labelYear.classList.toggle('font-normal', !isYear);

    updatePrices();
});

