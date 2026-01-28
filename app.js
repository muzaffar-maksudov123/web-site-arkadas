// ВАЖНО: МЕНЯЙТЕ ТОЛЬКО ЭТОТ ФАЙЛ ДЛЯ ДОБАВЛЕНИЯ ФОТО!

// Данные меню - ДОБАВЬТЕ СВОИ ФОТО ЗДЕСЬ!
const menuData = {
    food: [
        { 
            id: 1, 
            name: "Mastava", 
            price: 25000, 
            description: "Мастава — разновидность заправочного супа, национальное блюдо таджикской и узбекской кухонь.", 
            tags: ["Популярное", ],
            // ЗАМЕНИТЕ "images/doner.jpg" НА ПУТЬ К ВАШЕЙ ФОТО
            image: "img/mastavaa.jpg"  // ← ВАШЕ ФОТО
        },
        { 
            id: 2, 
            name: "Chechevitsa", 
            price: 25000, 
            description: "Chechevitsa — блюдо, в котором основным ингредиентом является чечевица.", 
            tags: ["Популярное", ],
            image: "img/chev.jpg"  // ← ВАШЕ ФОТО
        },
        { 
            id: 3, 
            name: "Unoshi", 
            price: 20000, 
            description: "", 
            tags: ["Популярное", ],
            image: "Img/uno.jpg"  // ← ВАШЕ ФОТО
        },
        { 
            id: 4, 
            name: "Shorva asarti", 
            price: 30000, 
            description: "Традиционная шурва ассоциируется с нежнейшим мясом, плавающим в прозрачном бульоне с разноцветными овощами и яркой зеленью.", 
            tags: ["Популярное", ],
            image: "img/as.jpg"  // ← ВАШЕ ФОТО
        },
        { 
            id: 5, 
            name: "Iskandar Kabob", 
            price: 54000, 
            description: "«Искендер-кебаб» (тур. İskender kebap) — одно из самых известных блюд северо-западной Турции, региона Бурса.", 
            tags: ["Популярное", "Мясо"],
            image: "img/ka.jpg"  // ← ВАШЕ ФОТО
        },
        {
            id: 6, 
            name: "Doner Goshti", 
            price: 44000, 
            description: "Gosht Doner — проект фастфуда в Ташкенте, входящий в холдинг Gōsht Group.", 
            tags: ["Мясо", "Популярное"],
            image: "img/d.jpg"  // ← ВАШЕ ФОТО
        },


        {
            id: 7, 
            name: "Beyti Doner", 
            price: 49000, 
            description: "Донер Бейти — традиционное турецкое блюдо. Классический вариант готовят из баранины, но также используют говядину, курицу и даже сою. ", 
            tags: ["Мясо",],
            image: "img/be.jpg"  // ← ВАШЕ ФОТО
        },
        

        {
            id: 8, 
            name: "Yoglama Doner", 
            price: 99000, 
            description: " блюдо из турецкой кухни, которое называют также турецкой лазаньей.", 
            tags: ["Мясо",],
            image: "img/yog.jpg"  // ← ВАШЕ ФОТО
        },
        


        {
            id: 9, 
            name: "Doner (Tivuqli/Donerli", 
            price: "34.000/44.000", 
            description: "популярное блюдо, которое готовят из мяса, приготовленного на вертикальном вертеле. ", 
            tags: ["Мясо", "Популярное"],
            image: "img/doner.jpg"  // ← ВАШЕ ФОТО
        },
        



        {
            id: 10, 
            name: "Lavash (Tovuqli/Donerli)", 
            price: "34.000/44.000",
            description: "Блюдо турецкого производства из мяса, приготовленного на вертикальной жаровне-гриль.  ", 
            tags: ["Мясо", "Lavash", "Популярное"],
            image: "img/lav.jpg"  // ← ВАШЕ ФОТО
        },
        



        {
            id: 11, 
            name: "Doner Burger", 
            price: 38000, 
            description: "Doner burger — блюдо, сочетающее элементы турецкой и немецкой кулинарных традиций.", 
            tags: ["Мясо", "Популярное"],
            image: "img/bur.jpg"  // ← ВАШЕ ФОТО
        },
        




        {
            id: 12, 
            name: "Tost (Tovuqli/Donerli)", 
            price: "39.000/49.000", 
            description: "", 
            tags: ["`Популярное",],
            image: "img/tost.jpg"  // ← ВАШЕ ФОТО
        },
        





        {
            id: 13, 
            name: "Matsarella Burger", 
            price: 42000, 
            description: " чизбургер (англ. cheeseburger, от cheese — сыр) — гамбургер с сыром, где традиционно ломтик сыра кладётся поверх мясной котлеты. ", 
            tags: ["Мясо", "Популярное"],
            image: "img/mm.jpg"  // ← ВАШЕ ФОТО
        },
        




        {
            id: 14, 
            name: "Chiz Burger", 
            price:    "39.000/49.000", 
            description: " чизбургер — гамбургер с сыром, где традиционно ломтик сыра кладётся поверх мясной котлеты. ", 
            tags: ["Мясо",],
            image: "img/chiz.jpg"  // ← ВАШЕ ФОТО
        },
        





        {
            id: 15, 
            name: "Chiken Burger", 
            price: 29000, 
            description: "Chicken Burger — сэндвич с куриной котлетой в качестве основного ингредиента.", 
            tags: ["Курица", "Популярное" ],
            image: "img/ch.jpg"  // ← ВАШЕ ФОТО
        },
        




        {
            id: 17, 
            name: "Peperoni Pizza", 
            price:  69000,
            description: "Пицца пепперони — простой вариант итальянской выпечки, популярный во всём мире. ", 
            tags: ["Пицца", "Поплуряное" ],
            image: "img/pepr.jpg"  // ← ВАШЕ ФОТО
        }, 

        {
            id: 18, 
            name: "Chicken Pizza ", 
            price:  75000,
            description: "Chicken Pizza — пицца с курицей.", 
            tags: ["Пицца", "Популярное" ],
            image: "img/chch.jpg"  // ← ВАШЕ ФОТО
        }, 


        {
            id: 19, 
            name: "Doner Pizza", 
            price:  85000,
            description: "донер-пицца — одно из популярных блюд в Филадельфии.", 
            tags: ["Мясо", "Пицца"],
            image: "img/jj.jpg"  // ← ВАШЕ ФОТО
        }, 



        {
            id: 20, 
            name: "Myasnoy Pizza", 
            price:  79000,
            description: "Мясная пицца — блюдо с мясной начинкой.", 
            tags: ["Мясо", "Пицца"],
            image: "img/e.jpg"  // ← ВАШЕ ФОТО
        }, 



        {
            id: 21, 
            name: "Miks Pizza", 
            price:  79000,
            description: "Пицца MIX — это блюдо, в котором сочетаются свежие ингредиенты: томатный соус, сыр, разнообразные виды мяса и овощи. ", 
            tags: ["Мясо",  "Пицца"],
            image: "img/mix.jpg"  // ← ВАШЕ ФОТО
        }, 



        {
            id: 22, 
            name: "Doner Pide", 
            price:  65000,
            description: "Doner pide — это турецкий плоский хлеб, который используют в качестве основы для донера. ", 
            tags: ["Мясо", ],
            image: "img/pidee.jpg"  // ← ВАШЕ ФОТО
        }, 



        {
            id: 23, 
            name: "Kolbasa Pide", 
            price:  49000,
            description: "Пиде с колбасой — одно из вариантов турецкого блюда. ", 
            tags: ["Мясо", ],
            image: "img/kk.jpg"  // ← ВАШЕ ФОТО
        }, 




        {
            id: 24, 
            name: "Desert Pide", 
            price:  49000,
            description: " блюдо из турецкой кухни. ", 
            tags: ["Мясо", ],
            image: "img/de.jpg"  // ← ВАШЕ ФОТО
        }, 



        {
            id: 25, 
            name: "Medalyon Steyk", 
            price:  99000,
            description: "Стейк-медальон — это блюдо из говядины, которое готовят из вырезки или филейной части. ", 
            tags: ["Мясо", "Стейк", "Популярное"],
            image: "img/medd.jpg"  // ← ВАШЕ ФОТО
        }, 




        {
            id: 26, 
            name: "Setka Kabob", 
            price:  89000,
            description: "блюда из жареного мяса в сетке, популярного в странах Ближнего Востока, Закавказья и Центральной Азии. ", 
            tags: ["Мясо", ],
            image: "img/kabobb.jpg"  // ← ВАШЕ ФОТО
        }, 


        {
            id: 27, 
            name: "Horazm Kabob", 
            price:  79000,
            description: " «Хоразмча Кабоб» — блюдо узбекской кухни, которое готовят только в Хорезме.", 
            tags: ["Мясо", ],
            image: "img/horz.jpg"  // ← ВАШЕ ФОТО
        }, 



        {
            id: 28, 
            name: "Kanot Shashlik", 
            price:  20.000,
            description: "«канот кабоб» — шашлык из куриных крылышек, блюдо узбекской кухни.", 
            tags: ["Мясо", "Шашлык", "Популярное"],
            image: "img/kanot.jpg"  // ← ВАШЕ ФОТО
        }, 



        {
            id: 29, 
            name: "Ijon Shashlik", 
            price:  18000,
            description: " «Ijon Shashlik» - Это традиционное блюдо узбекской кухни.", 
            tags: ["Мясо", "Шашлык", "Популярное"],
            image: "img/ijonn.jpg"  // ← ВАШЕ ФОТО
        }, 




        {
            id: 30, 
            name: "Kuskavoy Shashlik", 
            price:  26000,
            description: "Кусковой узбекский шашлык. ", 
            tags: ["Мясо", "Шашлык"] ,
            image: "img/kus.jpg"  // ← ВАШЕ ФОТО
        }, 


        {
            id: 31, 
            name: "Adana Shashlik", 
            price:  30000,
            description: " блюдо турецкой кухни, названное в честь города Адана на юге Турции.", 
            tags: ["Мясо", "Шашлык"],
            image: "img/hh.jpg"  // ← ВАШЕ ФОТО
        }, 



        {
            id: 32, 
            name:"Sousa Baliq", 
            price:  90000,
            description: "", 
            tags: ["Рыба", ],
            image: "img/baliq.jpg"  // ← ВАШЕ ФОТО
        }, 



        {
            id: 33, 
            name: "Setka Baliq", 
            price:  1,
            description: "Сетка балик — копчёная рыба, которая готовиться в специальной сетке по огнем", 
            tags: ["Рыба", ],
            image: "img/setka.jpg"  // ← ВАШЕ ФОТО
        }, 




        {
            id: 34, 
            name: "Gapshirma", 
            price:  15000,
            description: "", 
            tags: ["Популярное", ],
            image: "img/f.jpg"  // ← ВАШЕ ФОТО
        }, 



        {
            id: 35, 
            name: "Somsa", 
            price:  15000,
            description: "Сомса-блюдо из теста, которое родом из Узбекистана, Казахстана, Кыргызстана, Таджикистана.", 
            tags: ["Мясо", "Популярное" ],
            image: "img/somsa.jpg"  // ← ВАШЕ ФОТО
        }, 


        
        // ... добавьте остальные 20 блюд с фото
    ],
    drinks: [
        { 
            id: 26, 
            name: "Coca Cola", 
            price: 15000, 
            description: "1л-12.000, 1,5л-15.000, 2l-20.000", 
            tags: ["Освежающий", "Напиток"],
            image: "img/cola.jpg"  // ← ВАШЕ ФОТО
        },

        { 
            id: 26, 
            name: "Pepsi", 
            price: 15000, 
            description: "Pepsi 1л-12.000, 1,5л-15.000", 
            tags: ["Освежающий", "Напиток"],
            image: "img/pepsi.jpg"  // ← ВАШЕ ФОТО
        },

        { 
            id: 26, 
            name: "Fanta", 
            price: 15000, 
            description: "1л-12.000, 1,5л-15.000", 
            tags: ["Освежающий", "Напиток"],
            image: "img/fanta.jpg"  // ← ВАШЕ ФОТО
        },


        { 
            id: 26, 
            name: "Sprite", 
            price: 15000, 
            description: "1,5л-15.000,", 
            tags: ["Освежающий", "Напиток"],
            image: "img/spritee.jpg"  // ← ВАШЕ ФОТО
        },
        { 
            id: 27, 
            name: "Чай", 
            price: 5000, 
            description: "Класический Узбекский Чай", 
            tags: ["Горячий", "Классика"],
            image: "img/tea.jpg"  // ← ВАШЕ ФОТО
        },
        // ... добавьте остальные 8 напитков с фото
    ],
    sweets: [
        { 
            id: 36, 
            name: "achiq chuchq", 
            price: 15000, 
            description: "", 
            tags: ["Салат", "популярное"],
            image: "img/achiq.jpg"  // ← ВАШЕ ФОТО
        },
        { 
            id: 38, 
            name: "Steyk Salat", 
            price: 40000, 
            description: "", 
            tags: ["Салат", "Популярное"],
            image: "img/steyksl.jpg"  // ← ВАШЕ ФОТО
        },

        { 
            id: 39, 
            name: "Xrustyashiy Baqlajan", 
            price: 35000, 
            description: "", 
            tags: ["Салат", "Популярное"],
            image: "img/sal.jpg"  // ← ВАШЕ ФОТО
        },



        { 
            id: 40, 
            name: "Xiva Ijon", 
            price: 20000, 
            description: "", 
            tags: ["салат", "Традиционное"],
            image: "img/ijonnn.jpg"  // ← ВАШЕ ФОТО
        },




        { 
            id: 41, 
            name: "Salat Sezar", 
            price: 30000, 
            description: "", 
            tags: ["Салат", "Традиционное"],
            image: "img/sezar.jpg"  // ← ВАШЕ ФОТО
        },



        { 
            id: 42, 
            name: "Salyonniy Salat", 
            price: 20000, 
            description: "", 
            tags: ["Салат", "Традиционное"],
            image: "img/salyonniy.jpg"  // ← ВАШЕ ФОТО
        },
        // ... добавьте остальные 8 сладостей с фото
    ]
};

// Остальной код не меняем (он ниже)
document.addEventListener('DOMContentLoaded', function() {
    initializeMenu();
    initializeNavigation();
    initializeAnimations();
    initializeScrollProgress();
});

function initializeMenu() {
    displayMenuItems('all');
    
    const menuTabs = document.querySelectorAll('.menu-tab');
    menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            menuTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            displayMenuItems(category);
        });
    });
    
    const searchInput = document.getElementById('menu-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterMenuItems(this.value);
        });
    }
    
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            menuTabs.forEach(t => t.classList.remove('active'));
            const targetTab = document.querySelector(`.menu-tab[data-category="${category}"]`);
            if (targetTab) {
                targetTab.classList.add('active');
                displayMenuItems(category);
                document.getElementById('menu').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    updateItemCounter();
}

function displayMenuItems(category) {
    const container = document.getElementById('menu-items');
    if (!container) return;
    
    container.innerHTML = '';
    
    let itemsToDisplay = [];
    
    if (category === 'all') {
        itemsToDisplay = [...menuData.food, ...menuData.drinks, ...menuData.sweets];
    } else if (category === 'food') {
        itemsToDisplay = menuData.food;
    } else if (category === 'drinks') {
        itemsToDisplay = menuData.drinks;
    } else if (category === 'sweets') {
        itemsToDisplay = menuData.sweets;
    }
    
    itemsToDisplay.forEach((item, index) => {
        const tagsHtml = item.tags.map(tag => 
            `<span class="menu-tag">${tag}</span>`
        ).join('');
        
        // ВАЖНО: Код для отображения фото
        const photoHtml = item.image 
            ? `<img src="${item.image}" alt="${item.name}" class="menu-item-image">`
            : `<div class="menu-item-image-placeholder">
                   <i class="fas fa-camera"></i>
                   <span>Добавьте фото</span>
               </div>`;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'menu-item-card animate-in';
        itemElement.style.animationDelay = `${index * 0.1}s`;
        itemElement.innerHTML = `
            <div class="menu-item-image-container ${item.image ? 'has-photo' : ''}">
                ${photoHtml}
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <span class="menu-item-price">${item.price.toLocaleString()} сум</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-tags">
                    ${tagsHtml}
                </div>
            </div>
        `;
        
        container.appendChild(itemElement);
    });
}

function filterMenuItems(searchTerm) {
    const allItems = [...menuData.food, ...menuData.drinks, ...menuData.sweets];
    const filteredItems = allItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    
    const container = document.getElementById('menu-items');
    if (!container) return;
    
    container.innerHTML = '';
    
    filteredItems.forEach((item, index) => {
        const tagsHtml = item.tags.map(tag => 
            `<span class="menu-tag">${tag}</span>`
        ).join('');
        
        const photoHtml = item.image 
            ? `<img src="${item.image}" alt="${item.name}" class="menu-item-image">`
            : `<div class="menu-item-image-placeholder">
                   <i class="fas fa-camera"></i>
                   <span>Добавьте фото</span>
               </div>`;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'menu-item-card animate-in';
        itemElement.style.animationDelay = `${index * 0.1}s`;
        itemElement.innerHTML = `
            <div class="menu-item-image-container ${item.image ? 'has-photo' : ''}">
                ${photoHtml}
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <span class="menu-item-price">${item.price.toLocaleString()} сум</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-tags">
                    ${tagsHtml}
                </div>
            </div>
        `;
        
        container.appendChild(itemElement);
    });
}

function updateItemCounter() {
    const totalItems = menuData.food.length + menuData.drinks.length + menuData.sweets.length;
    const counterElement = document.getElementById('item-count');
    if (counterElement) {
        counterElement.textContent = totalItems;
    }
}

function initializeNavigation() {
    const menuBtn = document.getElementById('menu-btn');
    const menuClose = document.getElementById('menu-close');
    const navMenu = document.getElementById('nav-menu');
    const navOverlay = document.getElementById('nav-overlay');
    
    if (!menuBtn || !navMenu) return;
    
    menuBtn.addEventListener('click', function() {
        navMenu.classList.add('active');
        navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.classList.add('active');
    });
    
    function closeMenu() {
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
        menuBtn.classList.remove('active');
    }
    
    menuClose.addEventListener('click', closeMenu);
    navOverlay.addEventListener('click', closeMenu);
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

function initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    document.querySelectorAll('.category-card, .menu-item-card, .contact-item, .delivery-item').forEach(el => {
        observer.observe(el);
    });
}

function initializeScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Остальные функции оставляем как есть
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight - 20;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-image');
    if (hero) hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});

const yearSpan = document.querySelector('.footer-bottom p:first-child');
if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = yearSpan.textContent.replace('2023', currentYear);
}