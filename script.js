const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('nav a');

const toTop = document.getElementById('toTop');

const toggle = document.getElementById('toggle');
const knob = document.getElementById('knob');
const labelMonth = document.getElementById('labelMonth');
const labelYear = document.getElementById('labelYear');

const privacyLink = document.getElementById('privacy-link');
const privacyModal = document.getElementById('privacy-modal');
const closePrivacy = document.getElementById('close-privacy');

// БУРГЕР-МЕНЮ

burger.addEventListener('click', () => {
    nav.classList.toggle('hidden');
});
// Закрытие меню при клике на ссылку
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.add('hidden'); // Принудительно скрываем меню
    });
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

// ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ

privacyLink.addEventListener('click', (e) => {
    e.preventDefault(); // Отменяем переход по ссылке
    privacyModal.classList.remove('hidden');
    privacyModal.classList.add('flex'); // Чтобы модалка появилась
});

closePrivacy.addEventListener('click', () => {
    privacyModal.classList.add('hidden');
    privacyModal.classList.remove('flex');
});

// Закрытие при клике на темный фон
privacyModal.addEventListener('click', (e) => {
    if (e.target === privacyModal) {
        privacyModal.classList.add('hidden');
        privacyModal.classList.remove('flex');
    }
});