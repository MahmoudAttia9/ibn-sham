// ===================================
// MENU DATA - مطعم ابن شام
// ===================================

const menuData = [
    // السندوتشات الغربي
    { id: 1, name: "بانيه", price: "فرنسي: - / سوري: 25 / لبناني: -", category: "western-sandwiches" },
    { id: 2, name: "سجق", price: "فرنسي: - / سوري: 40 / لبناني: -", category: "western-sandwiches" },
    { id: 3, name: "كبدة اسكندراني", price: "فرنسي: - / سوري: 35 / لبناني: -", category: "western-sandwiches" },
    { id: 4, name: "كبدة فراخ", price: "فرنسي: - / سوري: 40 / لبناني: -", category: "western-sandwiches" },
    { id: 5, name: "كريسبي", price: "فرنسي: - / سوري: 40 / لبناني: -", category: "western-sandwiches" },
    { id: 6, name: "زنجر", price: "فرنسي: - / سوري: 40 / لبناني: -", category: "western-sandwiches" },
    { id: 7, name: "شيش طاووق", price: "فرنسي: - / سوري: 40 / لبناني: -", category: "western-sandwiches" },
    { id: 8, name: "فاهيتا", price: "فرنسي: - / سوري: 40 / لبناني: -", category: "western-sandwiches" },
    { id: 9, name: "مكسيكي", price: "فرنسي: - / سوري: 40 / لبناني: -", category: "western-sandwiches" },
    { id: 10, name: "شاورما", price: "فرنسي: - / سوري: 40 / لبناني: -", category: "western-sandwiches" },
    { id: 11, name: "مشكل جبن", price: "فرنسي: - / سوري: 30 / لبناني: -", category: "western-sandwiches" },
    { id: 12, name: "كفتة", price: "فرنسي: - / سوري: 40 / لبناني: -", category: "western-sandwiches" },

    // السندوتشات الشرقي
    { id: 13, name: "بطاطس", price: "سوري: 20 / لبناني: 15", category: "eastern-sandwiches" },
    { id: 14, name: "بطاطس موتزاريلا", price: "سوري: 25 / لبناني: -", category: "eastern-sandwiches" },
    { id: 15, name: "فلافل", price: "سوري: 20 / لبناني: -", category: "eastern-sandwiches" },
    { id: 16, name: "فلافل بطاطس", price: "سوري: 20 / لبناني: -", category: "eastern-sandwiches" },
    { id: 17, name: "جبنة مقلية", price: "سوري: 25 / لبناني: -", category: "eastern-sandwiches" },

    // الوجبات
    { id: 18, name: "وجبة كريسبي", description: "4 قطع فراخ مقرمش فريش", price: "100", category: "meals" },
    { id: 19, name: "وجبة زنجر", description: "4 قطع فراخ مقرمش فريش", price: "100", category: "meals" },
    { id: 20, name: "وجبة شيش طاووق", description: "مشوي على جريل", price: "100", category: "meals" },
    { id: 21, name: "وجبة مكسيكي", description: "فراخ بالصوص الحار", price: "90", category: "meals" },
    { id: 22, name: "وجبة فاهيتا", description: "فراخ بالصوص", price: "90", category: "meals" },
    { id: 23, name: "وجبة كبدة فراخ", price: "80", category: "meals" },
    { id: 24, name: "وجبة كبدة اسكندراني", price: "80", category: "meals" },
    { id: 25, name: "وجبة مشكل فراخ عربي", price: "110", category: "meals" },

    // الفتات
    { id: 26, name: "فتة شيش طاووق", price: "60", category: "fattat" },
    { id: 27, name: "فتة شاورما فراخ", price: "60", category: "fattat" },
    { id: 28, name: "فتة شاورما فراخ موزاريلا", price: "70", category: "fattat" },
    { id: 29, name: "فتة كريسبي", price: "60", category: "fattat" },
    { id: 30, name: "فتة زنجر", price: "60", category: "fattat" },

    // كريب حادق
    { id: 31, name: "كريب موزاريلا", price: "40", category: "savory-crepe" },
    { id: 32, name: "كريب بطاطس", price: "40", category: "savory-crepe" },
    { id: 33, name: "كريب مشكل جبن", price: "50", category: "savory-crepe" },

    // كريب اللحوم
    { id: 34, name: "كريب سجق", price: "55", category: "meat-crepe" },
    { id: 35, name: "كريب بسطرمة", price: "60", category: "meat-crepe" },
    { id: 36, name: "كريب سوسيس", price: "55", category: "meat-crepe" },
    { id: 37, name: "كريب كفتة", price: "60", category: "meat-crepe" },
    { id: 38, name: "كريب مشكل لحوم", price: "70", category: "meat-crepe" },

    // كريب فراخ
    { id: 39, name: "كريب بانيه", price: "55", category: "chicken-crepe" },
    { id: 40, name: "كريب كريسبي", price: "60", category: "chicken-crepe" },
    { id: 41, name: "كريب زنجر", price: "60", category: "chicken-crepe" },
    { id: 42, name: "كريب فاهيتا", price: "60", category: "chicken-crepe" },
    { id: 43, name: "كريب مشكل فراخ", price: "70", category: "chicken-crepe" },

    // كريب حلو
    { id: 44, name: "كريب شيكولاته", price: "50", category: "sweet-crepe" },
    { id: 45, name: "كريب شيكولاته نوتيلا", price: "60", category: "sweet-crepe" },
    { id: 46, name: "كريب شيكولاته بندق موز", price: "55", category: "sweet-crepe" },
    { id: 47, name: "كريب شيكولاته بندق هوهوز", price: "60", category: "sweet-crepe" },
    { id: 48, name: "كريب شيكولاته توينكز", price: "55", category: "sweet-crepe" },
    { id: 49, name: "كريب نوتيلا موز", price: "60", category: "sweet-crepe" },
    { id: 50, name: "كريب نوتيلا هوهوز", price: "60", category: "sweet-crepe" },
    { id: 51, name: "كريب نوتيلا توينكز", price: "60", category: "sweet-crepe" },
    { id: 52, name: "كريب ابن شام", price: "70", category: "sweet-crepe" },

    // ميكسات
    { id: 53, name: "زنجر فاهيتا", price: "55", category: "combos" },
    { id: 54, name: "زنجر فاهيتا موزاريلا", price: "65", category: "combos" },
    { id: 55, name: "شيش طاووق فاهيتا", price: "55", category: "combos" },
    { id: 56, name: "شيش طاووق + فاهيتا + موزاريلا", price: "65", category: "combos" },

    // الأطباق
    { id: 57, name: "طبق أرز", price: "35", category: "dishes" },
    { id: 58, name: "طبق بطاطس", price: "20", category: "dishes" },
    { id: 59, name: "طبق تومية", price: "25", category: "dishes" },
    { id: 60, name: "حمص ناعم", price: "25", category: "dishes" },
    { id: 61, name: "فلافل", description: "بالقطعة", price: "20", category: "dishes" },

    // برجر اللحمة
    { id: 62, name: "كلاسيك لحمة", price: "65", category: "meat-burgers" },
    { id: 63, name: "ماجنم برجر", price: "85", category: "meat-burgers" },
    { id: 64, name: "برجر العرجاني", price: "95", category: "meat-burgers" },
    { id: 65, name: "سماش برجر - سينجل", price: "65", category: "meat-burgers" },
    { id: 66, name: "سماش برجر - دبل", price: "85", category: "meat-burgers" },
    { id: 67, name: "سماش برجر - تريبل", price: "105", category: "meat-burgers" },

    // برجر الفراخ
    { id: 68, name: "كلاسيك فراخ", price: "50", category: "chicken-burgers" },
    { id: 69, name: "تشيكن بولز", price: "60", category: "chicken-burgers" },
    { id: 70, name: "بروست برجر", price: "85", category: "chicken-burgers" },

    // الإضافات - الصوصات والجبن
    { id: 71, name: "شيدر", price: "10 - 15", category: "extras" },
    { id: 72, name: "باربكيو", price: "5 - 10", category: "extras" },
    { id: 73, name: "تكسيس", price: "10 - 20", category: "extras" },
    { id: 74, name: "رانش", price: "10 - 20", category: "extras" },
    { id: 75, name: "هاليبينو", price: "5 - 10", category: "extras" },
    
    // الإضافات - إضافات أخرى
    { id: 76, name: "2 حلقات بصل مقلية", price: "10", category: "extras" },
    { id: 77, name: "2 موتزاريلا ستيك", price: "20", category: "extras" },
    { id: 78, name: "مشروم", price: "25", category: "extras" },
    { id: 79, name: "5 حلقات سلامي", price: "20", category: "extras" },
    { id: 80, name: "قطعة فراخ", price: "15", category: "extras" },
    { id: 81, name: "قطعة لحمة", price: "25", category: "extras" },
    { id: 82, name: "قطعة لحمة محشية جبنة", price: "40", category: "extras" },
    { id: 83, name: "قطعة سماش", price: "20", category: "extras" },
    { id: 84, name: "قطعة استربس", price: "15", category: "extras" }
];

// ===================================
// GLOBAL VARIABLES
// ===================================

let currentCategory = 'all';
let searchTerm = '';

// ===================================
// RENDER FUNCTIONS
// ===================================

function renderMenu() {
    const menuContainer = document.getElementById('menuContainer');
    const noResults = document.getElementById('noResults');
    
    let filteredMenu = menuData;
    
    if (currentCategory !== 'all') {
        filteredMenu = filteredMenu.filter(item => item.category === currentCategory);
    }
    
    if (searchTerm.trim() !== '') {
        filteredMenu = filteredMenu.filter(item => 
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    }
    
    menuContainer.innerHTML = '';
    
    if (filteredMenu.length === 0) {
        noResults.style.display = 'block';
        return;
    } else {
        noResults.style.display = 'none';
    }
    
    // Group items by category
    const groupedItems = {};
    filteredMenu.forEach(item => {
        if (!groupedItems[item.category]) {
            groupedItems[item.category] = [];
        }
        groupedItems[item.category].push(item);
    });
    
    // Render each category section
    Object.keys(groupedItems).forEach(category => {
        const items = groupedItems[category];
        const categoryName = getCategoryNameArabic(category);
        
        // Category banner
        const banner = document.createElement('div');
        banner.className = 'section-banner';
        banner.textContent = categoryName;
        menuContainer.appendChild(banner);
        
        // Check if this category needs multi-price format
        if (category === 'western-sandwiches') {
            // Multi-price header
            const header = document.createElement('div');
            header.className = 'multi-price-header';
            header.innerHTML = `
                <div>الصنف</div>
                <div>فرنسي</div>
                <div>سوري</div>
                <div>لبناني</div>
            `;
            menuContainer.appendChild(header);
            
            // Items
            items.forEach(item => {
                const prices = item.price.split('/').map(p => p.trim().replace(/[^0-9]/g, ''));
                const itemDiv = document.createElement('div');
                itemDiv.className = 'menu-item-multi';
                itemDiv.innerHTML = `
                    <div class="multi-name">${item.name}</div>
                    <div class="multi-price-col">${prices[0] || '-'}</div>
                    <div class="multi-price-col">${prices[1] || '-'}</div>
                    <div class="multi-price-col">${prices[2] || '-'}</div>
                `;
                menuContainer.appendChild(itemDiv);
            });
        } else if (category === 'eastern-sandwiches') {
            // Two-column price header
            const header = document.createElement('div');
            header.className = 'multi-price-header';
            header.style.gridTemplateColumns = '3fr 1fr 1fr';
            header.innerHTML = `
                <div>الصنف</div>
                <div>سوري</div>
                <div>لبناني</div>
            `;
            menuContainer.appendChild(header);
            
            // Items
            items.forEach(item => {
                const prices = item.price.split('/').map(p => p.trim().replace(/[^0-9]/g, ''));
                const itemDiv = document.createElement('div');
                itemDiv.className = 'menu-item-multi';
                itemDiv.style.gridTemplateColumns = '3fr 1fr 1fr';
                itemDiv.innerHTML = `
                    <div class="multi-name">${item.name}</div>
                    <div class="multi-price-col">${prices[0] || '-'}</div>
                    <div class="multi-price-col">${prices[1] || '-'}</div>
                `;
                menuContainer.appendChild(itemDiv);
            });
        } else {
            // Simple list format
            items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'menu-item';
                
                const descriptionHTML = item.description ? 
                    `<span class="item-desc">${item.description}</span>` : '';
                
                itemDiv.innerHTML = `
                    <div class="item-info">
                        <span class="item-name">${item.name}</span>
                        ${descriptionHTML}
                    </div>
                    <div class="item-price">${item.price.replace(/[^0-9]/g, '')}</div>
                `;
                menuContainer.appendChild(itemDiv);
            });
        }
    });
}

function getCategoryNameArabic(category) {
    const categoryNames = {
        'western-sandwiches': 'سندوتشات غربي',
        'eastern-sandwiches': 'سندوتشات شرقي',
        'meals': 'الوجبات',
        'fattat': 'الفتات',
        'savory-crepe': 'كريب حادق',
        'meat-crepe': 'كريب لحوم',
        'chicken-crepe': 'كريب فراخ',
        'sweet-crepe': 'كريب حلو',
        'combos': 'ميكسات',
        'dishes': 'الأطباق',
        'meat-burgers': 'برجر اللحمة',
        'chicken-burgers': 'برجر الفراخ',
        'extras': 'الإضافات'
    };
    
    return categoryNames[category] || category;
}

// ===================================
// EVENT LISTENERS
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-pills .nav-link');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.getAttribute('data-category');
            renderMenu();
        });
    });
    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function(e) {
        searchTerm = e.target.value;
        renderMenu();
    });
    
    renderMenu();

    // Drag-to-scroll for category bar (desktop + touch)
    (function enableDragToScroll() {
        const scroller = document.querySelector('.category-pills');
        if (!scroller) return;

        let isDown = false;
        let startX;
        let scrollLeft;

        const pointerDown = (e) => {
            isDown = true;
            scroller.classList.add('dragging');
            startX = (e.pageX || e.touches && e.touches[0].pageX) - scroller.offsetLeft;
            scrollLeft = scroller.scrollLeft;
        };

        const pointerMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = (e.pageX || e.touches && e.touches[0].pageX) - scroller.offsetLeft;
            const walk = (x - startX) * 1; // scroll-fast multiplier
            scroller.scrollLeft = scrollLeft - walk;
        };

        const pointerUp = () => {
            isDown = false;
            scroller.classList.remove('dragging');
        };

        // Mouse events
        scroller.addEventListener('mousedown', pointerDown);
        scroller.addEventListener('mousemove', pointerMove);
        document.addEventListener('mouseup', pointerUp);

        // Touch events
        scroller.addEventListener('touchstart', pointerDown, { passive: true });
        scroller.addEventListener('touchmove', pointerMove, { passive: false });
        scroller.addEventListener('touchend', pointerUp);

        // Prevent accidental text selection while dragging
        scroller.addEventListener('mouseleave', pointerUp);
    })();
});
