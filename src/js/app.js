/*
(i) Код потрапляє у підсумковий файл,
тільки коли викликана функція,
наприклад flsFunctions.spollers();
Або коли імпортовано весь файл,
наприклад, import "files/script.js";
Невикористовуваний (не викликаний)
код у підсумковий файл не потрапляє.

Якщо ми хочемо додати модуль
слід його розкоментувати
*/

// Увімкнути/вимкнути FLS (Full Logging System) (в роботі)
window['FLS'] = true;

// Підключення основного файлу стилів
import "../scss/style.scss";

// ========================================================================================================================================================================================================================================================
// Функціонал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Перевірка підтримки webp, додавання класу webp або no-webp для HTML */
/* (i) необхідно для коректного відображення webp із css */
flsFunctions.isWebp();
/* Додавання класу touch для HTML якщо браузер мобільний */
// flsFunctions.addTouchClass();
/* Додавання loaded для HTML після повного завантаження сторінки */
// flsFunctions.addLoadedClass();
/* Модуль для роботи з меню (Бургер) */
// flsFunctions.menuInit();
/* Враховування плаваючої панелі на мобільних пристроях при 100vh */
// flsFunctions.fullVHfix();

/*
Модуль "Спойлери"
Документація: https://template.fls.guru/template-docs/modul-spojlery.html
Сніппет (HTML): spollers
*/
// flsFunctions.spollers();

/*
Модуль "Таби"
Документація: https://template.fls.guru/template-docs/modul-taby.html
Сніппет (HTML): tabs
*/
// flsFunctions.tabs();

/*
Модуль "Показати ще"
Документація: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сніппет (HTML): showmore
*/
// flsFunctions.showMore();

/*
Модуль "Ефект хвиль"
Документация: https://template.fls.guru/template-docs/modul-ripple-effect.html
Сниппет (HTML):
*/
// flsFunctions.rippleEffect();

/*
Модуль "Кастомний курсор"
Документация:
Сниппет (HTML):
*/
// flsFunctions.customCursor(true);

/*
Модуль "Попапи"
Документація: https://template.fls.guru/template-docs/funkcional-popup.html
Сніппет (HTML): pl, pop
*/
// import './libs/popup.js'

/*
Модуль паралаксу мишею
Документація: https://template.fls.guru/template-docs/modul-animacii-parallaks-obektov-pri-dvizhenii-myshi.html
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Робота з формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsForms from "./files/forms/forms.js";

/* Робота з полями форми */
/* Документація: https://template.fls.guru/template-docs/rabota-s-formami.html */
/*
flsForms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});
*/
/* Надсилання форми */
/* Документація: https://template.fls.guru/template-docs/rabota-s-formami.html */
// flsForms.formSubmit();

/* Модуль форми "кількість" */
// flsForms.formQuantity();

/* Модуль зіркового рейтингу */
// flsForms.formRating();

/* Модуль роботи з select. */
// import './libs/select.js'

/* Модуль роботи з календарем */
// import './files/forms/datepicker.js'

/* (У роботі) Модуль роботи з масками.*/
/*
Підключення та налаштування виконується у файлі js/files/forms/inputmask.js
Документація по роботі у шаблоні:
Документація плагіна: https://github.com/RobinHerbots/inputmask
Сніппет(HTML):
*/
// import "./files/forms/inputmask.js";

/* Модуль роботи з повзунком */
/*
Підключення та налаштування виконується у файлі js/files/forms/range.js
Документація по роботі у шаблоні:
Документація плагіна: https://refreshless.com/nouislider/
Сніппет (HTML): range
*/
// import "./files/forms/range.js";

/* Модуль роботи з підказками (tippy) */
/*
Підключення плагіна Tippy.js та налаштування виконується у файлі js/files/tippy.js
Документація по роботі у шаблоні:
Документація плагіна: https://atomiks.github.io/tippyjs/
Сніппет (HTML): tip (додає атрибут з підказкою для html тега)
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// Робота зі слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Налаштування підключення плагіна слайдера Swiper та нових слайдерів виконується у файлі js/files/sliders.js
Документація по роботі у шаблоні: https://template.fls.guru/template-docs/rabota-so-slajderom-swiper.html
Документація плагіна: https://swiperjs.com/
Сніппет(HTML): swiper
*/
//import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Модулі роботи з прокручуванням сторінки ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Зміна дизайну скроллбару
Документація по роботі у шаблоні: У HTML додаємо до блоку атрибут data-simplebar
Документація плагіна: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сніппет(HTML): 
*/
// import './files/scroll/simplebar.js';

// Ліниве (відкладене) завантаження картинок
// Документація по роботі у шаблоні: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документація плагіна: https://github.com/verlok/vanilla-lazyload
// Сніппет(HTML):
// import './files/scroll/lazyload.js';

// Спостерігач за об'єктами з атрибутом data-watch
// Документація: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// Сніппет(HTML):
// import './libs/watcher.js'

// Модуль поекранної прокрутки
// Документація: https://template.fls.guru/template-docs/modul-poekrannoj-prokrutki-stranicy-fullpage.html
// Сніппет(HTML):
// import './libs/fullpage.js'

// Модуль паралаксу
// Документація: https://template.fls.guru/template-docs/paralaks-pri-skroli.html
// Сніппет(HTML):
// import './libs/parallax.js'

// Функції роботи скролом
import * as flsScroll from "./files/scroll/scroll.js";

// Плавна навігація по сторінці
// Документація: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
// flsScroll.pageNavigation();

// Функціонал додавання класів до хедеру під час прокручування
// Документація: https://template.fls.guru/template-docs/modul-dobavleniya-klassov-k-shapke-pri-prokrutke-stranicy.html
// flsScroll.headerScroll();

// Функціонал липкого блоку
// flsScroll.stickyBlock();

// Модуль анімація цифрового лічильника
// Документація: https://template.fls.guru/template-docs/modul-animacii-cifrovogo-lichilnika.html
// Сніппет(HTML):
// flsScroll.digitsCounter();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документація по роботі у шаблоні: 
Документація плагіна: https://www.lightgalleryjs.com/docs/
Сніппет(HTML):
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Інші плагіни ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамічний адаптив */
// Документація: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html
// import "./libs/dynamic_adapt.js";

/* Форматування чисел */
// import './libs/wNumb.min.js';

// ========================================================================================================================================================================================================================================================
// Інше ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Підключаємо файли зі своїм кодом */
import "./files/script.js";
//============================================================================================================================================================================================================================================

// const albumCollection = [
// 	{
// 		id: 1,
// 		imgSrc: 1,
// 		title: "Let There Be Rock",
// 		artist: "AC/DC",
// 		year: 1990,
// 		style: "Punk, Dub, Funk",
// 		country: "USA"
// 	},
// 	{
// 		id: 2,
// 		imgSrc: 2,
// 		title: "Dark Side of the Moon",
// 		artist: "Pink Floyd",
// 		year: 1973,
// 		style: "Progressive Rock",
// 		country: "United Kingdom"
// 	},
// 	{
// 		id: 3,
// 		imgSrc: 3,
// 		title: "Thriller",
// 		artist: "Michael Jackson",
// 		year: 1982,
// 		style: "Pop, R&B",
// 		country: "USA"
// 	},
// 	{
// 		id: 4,
// 		imgSrc: 4,
// 		title: "Back in Black",
// 		artist: "AC/DC",
// 		year: 1980,
// 		style: "Hard Rock",
// 		country: "Australia"
// 	},
// 	{
// 		id: 5,
// 		imgSrc: 5,
// 		title: "Abbey Road",
// 		artist: "The Beatles",
// 		year: 1969,
// 		style: "Rock",
// 		country: "United Kingdom"
// 	},
// 	{
// 		id: 6,
// 		imgSrc: 6,
// 		title: "Hotel California",
// 		artist: "Eagles",
// 		year: 1976,
// 		style: "Rock",
// 		country: "USA"
// 	},
// 	{
// 		id: 7,
// 		imgSrc: 7,
// 		title: "The Wall",
// 		artist: "Pink Floyd",
// 		year: 1979,
// 		style: "Progressive Rock",
// 		country: "United Kingdom"
// 	},
// 	{
// 		id: 8,
// 		imgSrc: 8,
// 		title: "Back to Black",
// 		artist: "Amy Winehouse",
// 		year: 2006,
// 		style: "Soul, R&B",
// 		country: "United Kingdom"
// 	},
// 	{
// 		id: 9,
// 		imgSrc: 9,
// 		title: "Rumours",
// 		artist: "Fleetwood Mac",
// 		year: 1977,
// 		style: "Rock, Pop",
// 		country: "United Kingdom"
// 	},
// 	{
// 		id: 10,
// 		imgSrc: 10,
// 		title: "The Dark Side of the Moon",
// 		artist: "Pink Floyd",
// 		year: 1973,
// 		style: "Progressive Rock",
// 		country: "United Kingdom"
// 	},
// 	{
// 		id: 11,
// 		imgSrc: 11,
// 		title: "Led Zeppelin IV",
// 		artist: "Led Zeppelin",
// 		year: 1971,
// 		style: "Hard Rock",
// 		country: "United Kingdom"
// 	},
// 	{
// 		id: 12,
// 		imgSrc: 12,
// 		title: "Sgt. Pepper's Lonely Hearts Club Band",
// 		artist: "The Beatles",
// 		year: 1967,
// 		style: "Rock",
// 		country: "United Kingdom"
// 	},
// 	{
// 		id: 13,
// 		imgSrc: 13,
// 		title: "Born to Run",
// 		artist: "Bruce Springsteen",
// 		year: 1975,
// 		style: "Rock",
// 		country: "USA"
// 	},
// 	{
// 		id: 14,
// 		imgSrc: 14,
// 		title: "The Joshua Tree",
// 		artist: "U2",
// 		year: 1987,
// 		style: "Rock",
// 		country: "Ireland"
// 	},
// 	{
// 		id: 15,
// 		imgSrc: 15,
// 		title: "A Night at the Opera",
// 		artist: "Queen",
// 		year: 1975,
// 		style: "Rock",
// 		country: "United Kingdom"
// 	},
// 	{
// 		id: 16,
// 		imgSrc: 16,
// 		title: "Thriller",
// 		artist: "Michael Jackson",
// 		year: 1982,
// 		style: "Pop, R&B",
// 		country: "USA"
// 	},
// 	{
// 		id: 17,
// 		imgSrc: 17,
// 		title: "Wish You Were Here",
// 		artist: "Pink Floyd",
// 		year: 1975,
// 		style: "Progressive Rock",
// 		country: "United Kingdom"
// 	},
// 	{
// 		id: 18,
// 		imgSrc: 18,
// 		title: "The White Album",
// 		artist: "The Beatles",
// 		year: 1968,
// 		style: "Rock",
// 		country: "United Kingdom"
// 	},
// 	{
// 		id: 19,
// 		imgSrc: 19,
// 		title: "Bridge Over Troubled Water",
// 		artist: "Simon & Garfunkel",
// 		year: 1970,
// 		style: "Folk Rock",
// 		country: "USA"
// 	},
// 	{
// 		id: 20,
// 		imgSrc: 20,
// 		title: "Court and Spark",
// 		artist: "Joni Mitchell",
// 		year: 1974,
// 		style: "Folk Jazz, Pop Rock",
// 		country: "Canada"
// 	},
// 	// Add more objects as needed
// ];