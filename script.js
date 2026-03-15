// ---- Works Data ----
const works = [
    {
        id: 'bomi',
        title: '봄이의 여행',
        year: 2019,
        publisher: '이야기꽃',
        category: 'peace',
        tag: '평화',
        coverColor: '#8FB5A2',
        isbn: '9788998751425',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788998751425.jpg',
            'https://image.aladin.co.kr/product/1960149/44/cover500/8998751429_1.jpg',
            'images/bomi.jpg'
        ],
        shortDesc: '분단의 현실 속에서 꽃 피는 한반도의 꿈을 담은 그림책.',
        fullDesc: '반세기가 지난 오늘, 화가 이억배가 여전히 슬픈 분단의 현실 속에서 또 다른 "꽃 피는 한반도의 꿈"을 꾸고, 그것을 그림책으로 옮겨 놓은 작품입니다. 평화에 대한 염원을 아이들의 눈높이에서 아름답게 표현했습니다.',
        awards: [],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=196014944'
    },
    {
        id: 'halfboy',
        title: '반쪽이',
        year: 1997,
        publisher: '보림 (까치호랑이 시리즈, 글: 이미애)',
        category: 'tradition',
        tag: '전통 이야기',
        coverColor: '#C5B8A5',
        isbn: '9788943302634',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788943302634.jpg',
            'https://image.aladin.co.kr/product/574/18/cover500/8943302630_1.jpg',
            'images/halfboy.jpg'
        ],
        shortDesc: '몸이 반쪽인 아이의 성장을 통해 자기 긍정의 메시지를 전하는 전래동화 그림책.',
        fullDesc: '보림 출판사의 "까치호랑이" 시리즈 제9권으로, 이미애 글, 이억배 그림으로 만들어진 작품입니다. 눈도 귀도 팔도 다리도 하나씩밖에 없는 반쪽이가 겉모습 때문에 따돌림을 당하면서도 언제나 꿋꿋하고 재치 있게 자신을 그대로 받아들이며 주어진 상황에 최선을 다하는 이야기입니다. 원근법을 무시하지만 전혀 어색하지 않은 민화의 특성을 살려 편안함과 친근함을 주는 그림이 돋보입니다.',
        awards: [],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=57418'
    },
    {
        id: 'jaljaljal',
        title: '잘잘잘 123',
        year: 2008,
        publisher: '사계절',
        category: 'life',
        tag: '생활·학습',
        coverColor: '#E8D5B7',
        isbn: '9788958282792',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788958282792.jpg',
            'https://image.aladin.co.kr/product/19611/48/cover500/8958282797_1.jpg',
            'images/jaljaljal.jpg'
        ],
        shortDesc: '우리나라 전래동요 "잘잘잘"을 유아들을 위해 새롭게 편집한 수 놀이 그림책.',
        fullDesc: '1세부터 3세까지의 유아들을 위한 말문 틔기 그림책입니다. 우리나라 전래동요 "잘잘잘"을 유아들을 위해 새롭게 편집한 것으로, 반복되는 구절과 리듬을 통해 아이들의 말하기 능력을 향상시켜줍니다. 왼쪽에는 숫자, 오른쪽에는 그림이 들어있어 "하나"부터 "열"까지 배울 수 있는 수놀이 그림책으로서의 역할도 합니다.',
        awards: ['문화체육관광부 추천도서', '국립어린이청소년도서관 사서추천도서'],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=1961148'
    },
    {
        id: 'gaegujangi',
        title: '개구쟁이 ㄱㄴㄷ',
        year: 2005,
        publisher: '사계절',
        category: 'life',
        tag: '생활·학습',
        coverColor: '#A8C5C0',
        isbn: '9788958280828',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788958280828.jpg',
            'https://image.aladin.co.kr/product/5558/41/cover500/8958280824_1.jpg',
            'images/gaegujangi.jpg'
        ],
        shortDesc: '개구쟁이 아이의 하루 이야기 속에 한글 닿소리 14자를 담은 그림책.',
        fullDesc: '이억배 작가가 직접 글을 쓰고 그림을 그린 작품으로, 첫 작품인 "솔이의 추석 이야기" 이후 꼭 10년 만에 발표한 그림책입니다. 개구쟁이 아이의 평범하면서도 특별한 하루 이야기 속에 ㄱ부터 ㅎ까지 한글 닿소리 14자를 담고 있습니다. 작가 특유의 소박하면서도 친근한 한국적 선묘가 돋보이는 가나다 그림책입니다.',
        awards: [],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=555841'
    },
    {
        id: 'mandu',
        title: '손 큰 할머니의 만두 만들기',
        year: 2001,
        publisher: '재미마주 (글: 채인선)',
        category: 'tradition',
        tag: '전통 이야기',
        coverColor: '#D4C4A0',
        isbn: '9788986565065',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788986565065.jpg',
            'https://image.aladin.co.kr/product/831/27/cover500/8986565064_1.jpg',
            'images/mandu.jpg'
        ],
        shortDesc: '손 큰 할머니가 숲속 동물들과 함께 설날 만두를 만드는 따뜻한 이야기.',
        fullDesc: '채인선 글, 이억배 그림으로 만들어진 작품입니다. 무엇이든지 엄청 크게 하는 손 큰 할머니가 숲속 동물들과 함께 매년 새해에 먹을 만두를 만드는 이야기입니다. 설날의 정서와 나눔의 가치를 해학적으로 표현했으며, 교과서에도 수록되어 꾸준히 사랑받고 있습니다.',
        awards: ['KBSTV 책을 말하다 선정도서', '어린이문화대상(어린이문화진흥회)'],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=83127'
    }
];

// ---- Cascading image loader ----
function loadImageCascade(imgEl, urls, fallbackEl) {
    let idx = 0;
    function tryNext() {
        if (idx >= urls.length) {
            imgEl.style.display = 'none';
            if (fallbackEl) fallbackEl.style.display = 'flex';
            return;
        }
        imgEl.src = urls[idx];
        idx++;
    }
    imgEl.onerror = tryNext;
    imgEl.onload = function() {
        // Skip tiny placeholder images (1x1 pixel etc)
        if (this.naturalWidth < 10 || this.naturalHeight < 10) {
            tryNext();
        }
    };
    tryNext();
}

// ---- Render Works ----
const worksGrid = document.getElementById('worksGrid');

function renderWorks() {
    worksGrid.innerHTML = works.map(w => `
        <div class="work-card" data-category="${w.category}" data-id="${w.id}">
            <div class="work-image" style="background-color: ${w.coverColor}">
                <img data-images='${JSON.stringify(w.images)}' alt="${w.title}" loading="lazy">
                <div class="work-fallback">${w.title}</div>
                <div class="work-overlay"><span class="work-year">${w.year}</span></div>
            </div>
            <div class="work-info">
                <h3>${w.title}${w.awards.length ? '<span class="work-badge">수상작</span>' : ''}</h3>
                <p>${w.shortDesc}</p>
                <span class="work-tag">${w.tag}</span>
            </div>
        </div>
    `).join('');

    worksGrid.querySelectorAll('img[data-images]').forEach(img => {
        const urls = JSON.parse(img.dataset.images);
        const fallback = img.nextElementSibling;
        loadImageCascade(img, urls, fallback);
    });
}

renderWorks();

// ---- Navbar scroll ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ---- Mobile nav toggle ----
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ---- Works filter ----
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.work-card').forEach(card => {
            card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
        });
    });
});

// ---- Modal ----
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalYear = document.getElementById('modalYear');
const modalTitle = document.getElementById('modalTitle');
const modalPublisher = document.getElementById('modalPublisher');
const modalDesc = document.getElementById('modalDesc');
const modalAwards = document.getElementById('modalAwards');
const modalLink = document.getElementById('modalLink');

function openModal(workId) {
    const w = works.find(w => w.id === workId);
    if (!w) return;

    modalImg.alt = w.title;
    modalImg.parentElement.style.backgroundColor = w.coverColor;
    // Clean up previous fallback
    const oldFallback = modalImg.parentElement.querySelector('.work-fallback');
    if (oldFallback) oldFallback.remove();
    const modalFallback = document.createElement('div');
    modalFallback.className = 'work-fallback';
    modalFallback.style.cssText = 'width:100%;height:100%;min-height:300px;align-items:center;justify-content:center;font-family:var(--font-serif);font-size:1.5rem;color:var(--color-ink-light)';
    modalFallback.textContent = w.title;
    modalImg.parentElement.appendChild(modalFallback);
    modalImg.style.display = '';
    modalFallback.style.display = 'none';
    loadImageCascade(modalImg, w.images, modalFallback);
    modalYear.textContent = w.year + '년 · ' + w.publisher;
    modalTitle.textContent = w.title;
    modalPublisher.textContent = w.publisher;
    modalDesc.textContent = w.fullDesc;
    modalAwards.innerHTML = w.awards.map(a => `<span>${a}</span>`).join('');
    modalLink.href = w.link;

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
}

worksGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.work-card');
    if (card) openModal(card.dataset.id);
});

modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
modal.querySelector('.modal-close').addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ---- Scroll reveal ----
const revealElements = document.querySelectorAll(
    '.work-card, .timeline-item, .contact-card, .about-grid, .section-header'
);
revealElements.forEach(el => el.classList.add('reveal'));
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
revealElements.forEach(el => revealObserver.observe(el));

// ---- Smooth scroll ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
