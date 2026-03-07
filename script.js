// ---- Works Data ----
const works = [
    {
        id: 'onui',
        title: '오누이 이야기',
        year: 2020,
        publisher: '사계절출판사',
        category: 'tradition',
        tag: '전통 이야기',
        coverColor: '#3A5A7C',
        isbn: '9791160947878',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/280x0/pdt/9791160947878.jpg',
            'https://image.aladin.co.kr/product/22897/28/cover500/9791160947878_1.jpg',
            'https://books.google.com/books/content?vid=isbn:9791160947878&printsec=frontcover&img=1&zoom=1',
            'https://covers.openlibrary.org/b/isbn/9791160947878-L.jpg'
        ],
        shortDesc: '한국 전래동화 "해와 달이 된 오누이"를 이억배 특유의 필치로 그려낸 그림책.',
        fullDesc: '1996년에 그려 그림책 전집의 일부로 선보였던 그림을 스무 해가 지나 새로이 출간한 작품입니다. 원화의 실제 사이즈를 반영한 크고 세로가 긴 판형으로 제작하여, 청색의 번짐과 구불텅한 고목, 털 한 올 한 올이 살아있는 호랑이의 그림들이 생생합니다. 호랑이와 오누이의 입씨름, 호랑이를 이겨 먹으려는 오누이의 재치 등 이야기 속의 인간성에 집중한 작품입니다.',
        awards: ['2026 볼로냐 라가치상 특별부문 대상'],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=228972883'
    },
    {
        id: 'chuseok',
        title: '솔이의 추석 이야기',
        year: 1995,
        publisher: '길벗어린이',
        category: 'tradition',
        tag: '전통 이야기',
        coverColor: '#E8D5B7',
        isbn: '9788986621198',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/280x0/pdt/9788986621198.jpg',
            'https://image.aladin.co.kr/product/8/33/cover500/8986621193_1.jpg',
            'https://books.google.com/books/content?vid=isbn:9788986621198&printsec=frontcover&img=1&zoom=1',
            'https://covers.openlibrary.org/b/isbn/9788986621198-L.jpg'
        ],
        shortDesc: '도시에 사는 솔이가 추석에 시골 할머니 댁을 방문하며 겪는 따뜻한 명절 이야기.',
        fullDesc: '1993년부터 기획하여 1995년 출간한 이억배 작가의 첫 그림책입니다. 도시에 사는 솔이네 가족이 추석 명절을 지내기 위해 고향집으로 내려가는 이야기를 담고 있습니다. 원색의 그림책에 익숙해져 있는 아이들에게 한국 전통 채색화의 색과 선을 살린 정겨운 그림들을 통해 새로운 감성을 키울 수 있게 해주는 작품입니다.',
        awards: [],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=83382'
    },
    {
        id: 'dmz',
        title: '비무장지대에 봄이 오면',
        year: 2010,
        publisher: '사계절출판사',
        category: 'peace',
        tag: '평화',
        coverColor: '#A8C5A0',
        isbn: '9788958284918',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/280x0/pdt/9788958284918.jpg',
            'https://image.aladin.co.kr/product/726/73/cover500/8958284919_1.jpg',
            'https://books.google.com/books/content?vid=isbn:9788958284918&printsec=frontcover&img=1&zoom=1',
            'https://covers.openlibrary.org/b/isbn/9780874869729-L.jpg'
        ],
        shortDesc: '분단의 상징 비무장지대를 소재로 한 평화 그림책. 한중일 평화그림책 프로젝트의 일환.',
        fullDesc: '한국과 중국, 일본 세 나라의 작가와 출판사가 함께 기획한 "한중일 평화그림책" 프로젝트의 일환으로 제작된 작품입니다. 비무장지대에 찾아온 봄의 풍경을 통해 한반도의 평화를 기원하는 메시지를 담고 있습니다. 영문판 When Spring Comes to the DMZ는 Plough Publishing House에서 출간되었습니다.',
        awards: ['2020 ALA 배첼더 아너', '2019 프리먼 어워드 가작', '커커스 리뷰 올해 최고의 그림책'],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=7267308'
    },
    {
        id: 'rooster',
        title: '세상에서 제일 힘센 수탉',
        year: 1997,
        publisher: '재미마주 (글: 이호백)',
        category: 'life',
        tag: '생활·학습',
        coverColor: '#D4C4A0',
        isbn: '9788986565133',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/280x0/pdt/9788986565133.jpg',
            'https://image.aladin.co.kr/product/8/06/cover500/8986565137_1.jpg',
            'https://books.google.com/books/content?vid=isbn:9788986565133&printsec=frontcover&img=1&zoom=1',
            'https://covers.openlibrary.org/b/isbn/9788986565133-L.jpg'
        ],
        shortDesc: '세월이 흘러도 변치 않는 가족의 사랑을 힘센 수탉의 이야기로 전하는 그림책.',
        fullDesc: '이호백 글, 이억배 그림으로 만들어진 작품입니다. 아주 힘센 수평아리 한 마리가 태어나 세상에서 제일 힘센 수탉이 됩니다. 세월이 흐르며 예전만큼 힘이 세지 않다는 것을 알고 슬픔에 빠지지만, 수탉의 부인이 건강하게 자라는 손자 손녀, 힘센 아들들을 보여주며 여전히 그가 세상에서 제일 힘센 수탉임을 일깨워 줍니다.',
        awards: ['1997 BIB(브라티슬라바 국제 일러스트레이션 비엔날레) 선정'],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=80675'
    },
    {
        id: 'story-pouch',
        title: '이야기 주머니 이야기',
        year: 2007,
        publisher: '보림 (까치호랑이 시리즈)',
        category: 'tradition',
        tag: '전통 이야기',
        coverColor: '#C9A96E',
        isbn: '9788943307530',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/280x0/pdt/9788943307530.jpg',
            'https://image.aladin.co.kr/product/89/43/cover500/8943307533_1.jpg',
            'https://books.google.com/books/content?vid=isbn:9788943307530&printsec=frontcover&img=1&zoom=1',
            'https://covers.openlibrary.org/b/isbn/9788943307530-L.jpg'
        ],
        shortDesc: '겨레의 삶과 꿈이 녹아 있는 옛이야기를 담은 그림책.',
        fullDesc: '보림 출판사의 "까치호랑이" 시리즈 제19권으로, 겨레의 삶과 꿈이 녹아 있는 옛이야기 그림책입니다. 이억배 특유의 동글동글 귀여운 표정과 따스한 색채의 그림이 돋보이는 작품입니다.',
        awards: ['2010 IBBY 어너리스트 선정'],
        link: 'https://product.kyobobook.co.kr/detail/S000000622184'
    },
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
            'https://contents.kyobobook.co.kr/sih/fit-in/280x0/pdt/9788998751425.jpg',
            'https://image.aladin.co.kr/product/19601/49/cover500/8998751429_1.jpg',
            'https://books.google.com/books/content?vid=isbn:9788998751425&printsec=frontcover&img=1&zoom=1',
            'https://covers.openlibrary.org/b/isbn/9788998751425-L.jpg'
        ],
        shortDesc: '분단의 현실 속에서 꽃 피는 한반도의 꿈을 담은 그림책.',
        fullDesc: '반세기가 지난 오늘, 화가 이억배가 여전히 슬픈 분단의 현실 속에서 또 다른 "꽃 피는 한반도의 꿈"을 꾸고, 그것을 그림책으로 옮겨 놓은 작품입니다. 평화에 대한 염원을 아이들의 눈높이에서 아름답게 표현했습니다.',
        awards: [],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=196014944'
    },
    {
        id: 'mosquito',
        title: '모기와 황소',
        year: 2003,
        publisher: '길벗어린이',
        category: 'tradition',
        tag: '전통 이야기',
        coverColor: '#D5C0A5',
        isbn: '9788986621952',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/280x0/pdt/9788986621952.jpg',
            'https://image.aladin.co.kr/product/26/24/cover500/8986621959_1.jpg',
            'https://books.google.com/books/content?vid=isbn:9788986621952&printsec=frontcover&img=1&zoom=1',
            'https://covers.openlibrary.org/b/isbn/9788986621952-L.jpg'
        ],
        shortDesc: '작은 존재의 당당함을 해학적으로 그려낸 전래동화 그림책.',
        fullDesc: '농촌 현실에 대한 경험을 바탕으로 발표한 작품으로, 한국 전래동화 "모기와 황소" 이야기를 이억배 특유의 해학과 따뜻한 시선으로 재해석한 그림책입니다.',
        awards: [],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=262422'
    },
    {
        id: 'halfboy',
        title: '반쪽이',
        year: 2005,
        publisher: '길벗어린이',
        category: 'tradition',
        tag: '전통 이야기',
        coverColor: '#C5B8A5',
        isbn: '9788986621945',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/280x0/pdt/9788986621945.jpg',
            'https://image.aladin.co.kr/product/55/72/cover500/8986621940_1.jpg',
            'https://books.google.com/books/content?vid=isbn:9788986621945&printsec=frontcover&img=1&zoom=1',
            'https://covers.openlibrary.org/b/isbn/9788986621945-L.jpg'
        ],
        shortDesc: '몸이 반쪽인 아이의 성장을 통해 자기 긍정의 메시지를 전하는 전래동화 그림책.',
        fullDesc: '한국 전래동화를 바탕으로 한 그림책입니다. 동글동글 귀여운 표정과 따스한 색채로 반쪽이의 이야기를 생동감 있게 표현했습니다. 다름을 인정하고 자기 자신을 사랑하는 메시지를 전달합니다.',
        awards: [],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=557290'
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
        if (this.naturalWidth < 2 || this.naturalHeight < 2) {
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

// ---- Author portrait ----
const authorImg = document.getElementById('authorPortrait');
const portraitFallback = document.getElementById('portraitFallback');
if (authorImg) {
    authorImg.style.display = 'none';
    portraitFallback.style.display = 'flex';
    // Try known author image sources; fallback to placeholder if none load
    const portraitUrls = [
        'https://image.aladin.co.kr/author/34/34041/34041_20200820.jpg',
        'https://contents.kyobobook.co.kr/author/1000009613.jpg'
    ];
    loadImageCascade(authorImg, portraitUrls, portraitFallback);
    authorImg.addEventListener('load', function() {
        if (this.naturalWidth > 2) {
            this.style.display = 'block';
            portraitFallback.style.display = 'none';
        }
    });
}

// ---- Smooth scroll ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
