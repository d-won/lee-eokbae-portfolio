// ---- Works Data ----
const works = [
    {
        id: 'chuseok',
        title: '솔이의 추석 이야기',
        year: 1995,
        publisher: '길벗어린이',
        category: 'tradition',
        tag: '전통 이야기',
        coverColor: '#D4B896',
        isbn: '9788986621198',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788986621198.jpg',
            'https://image.aladin.co.kr/product/49/16/cover500/8986621193_1.jpg',
            'images/chuseok.jpg'
        ],
        shortDesc: '한국 창작그림책의 새 지평을 연 이억배 작가의 첫 번째 그림책.',
        fullDesc: '1993년부터 기획하여 1995년 길벗어린이에서 출간한 이억배 작가의 첫 그림책입니다. 추석을 맞아 시골 할머니 댁을 찾는 솔이네 가족의 이야기를 통해, 한국의 전통 명절 풍경과 정서를 따뜻하게 그려냈습니다. 한국 채색화의 미감을 살린 그림이 돋보이며, 한국 창작그림책의 새 지평을 연 작품으로 평가받고 있습니다.',
        awards: [],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=4916'
    },
    {
        id: 'rooster',
        title: '세상에서 제일 힘센 수탉',
        year: 1997,
        publisher: '재미마주 (글: 이호백)',
        category: 'tradition',
        tag: '전통 이야기',
        coverColor: '#F0E6D3',
        isbn: '9788986565041',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788986565041.jpg',
            'https://image.aladin.co.kr/product/24/72/cover500/8986565041_1.jpg',
            'images/rooster.jpg'
        ],
        shortDesc: '한국 최초 IBBY 우수도서로 선정된 그림책. BIB 선정작.',
        fullDesc: '이호백 글, 이억배 그림으로 만들어진 작품입니다. 힘센 수탉이 세상에서 가장 힘센 존재를 찾아 떠나는 이야기를 통해, 진정한 힘의 의미를 되새기게 합니다. 한국 최초로 IBBY(국제어린이도서협의회) 우수도서로 선정되었으며, 1997년 BIB(브라티슬라바 국제 일러스트레이션 비엔날레)에도 선정되었습니다.',
        awards: ['IBBY 우수도서 선정', 'BIB 선정 (1997)'],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=2472'
    },
    {
        id: 'mandu',
        title: '손 큰 할머니의 만두 만들기',
        year: 2001,
        publisher: '재미마주 (글: 채인선)',
        category: 'tradition',
        tag: '전통 이야기',
        coverColor: '#E8E0D4',
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
    },
    {
        id: 'mosquito',
        title: '모기와 황소',
        year: 2003,
        publisher: '길벗어린이 (글: 현동염)',
        category: 'tradition',
        tag: '전통 이야기',
        coverColor: '#C8BFA8',
        isbn: '9788955820046',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788955820046.jpg',
            'https://image.aladin.co.kr/product/3994/92/cover500/8955820042_1.jpg',
            'images/mosquito.jpg'
        ],
        shortDesc: '작은 모기와 거대한 황소의 만남을 섬세한 필치로 그려낸 그림책.',
        fullDesc: '현동염 글, 이억배 그림으로 만들어진 작품입니다. 작고 보잘것없는 모기가 거대한 황소에게 말을 걸지만, 황소는 모기의 존재조차 알지 못합니다. 크고 작음의 상대성, 그리고 존재의 의미에 대해 생각하게 하는 그림책으로, 이억배 특유의 섬세한 세밀화 기법이 돋보이는 작품입니다.',
        awards: [],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=14898'
    },
    {
        id: 'gaegujangi',
        title: '개구쟁이 ㄱㄴㄷ',
        year: 2005,
        publisher: '사계절',
        category: 'life',
        tag: '생활·학습',
        coverColor: '#7BAFD4',
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
        id: 'halfboy',
        title: '반쪽이',
        year: 1997,
        publisher: '보리 (글: 이미애)',
        category: 'tradition',
        tag: '전통 이야기',
        coverColor: '#D8CDB8',
        isbn: '9788943302634',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788943302634.jpg',
            'https://image.aladin.co.kr/product/574/18/cover500/8943302630_1.jpg',
            'images/halfboy.jpg'
        ],
        shortDesc: '몸이 반쪽인 아이의 성장을 통해 자기 긍정의 메시지를 전하는 전래동화 그림책.',
        fullDesc: '보리 출판사의 "까치호랑이" 옛이야기그림책 시리즈로, 이미애 글, 이억배 그림으로 만들어진 작품입니다. 눈도 귀도 팔도 다리도 하나씩밖에 없는 반쪽이가 겉모습 때문에 따돌림을 당하면서도 언제나 꿋꿋하고 재치 있게 자신을 그대로 받아들이며 주어진 상황에 최선을 다하는 이야기입니다. 원근법을 무시하지만 전혀 어색하지 않은 민화의 특성을 살려 편안함과 친근함을 주는 그림이 돋보입니다.',
        awards: [],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=57418'
    },
    {
        id: 'story-pouch',
        title: '이야기 주머니 이야기',
        year: 2009,
        publisher: '사계절',
        category: 'tradition',
        tag: '전통 이야기',
        coverColor: '#2C3E50',
        isbn: '9788943307530',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788943307530.jpg',
            'https://image.aladin.co.kr/product/509/61/cover500/8943307530_1.jpg',
            'images/story-pouch.jpg'
        ],
        shortDesc: '이야기의 힘과 소중함을 담은 한국 전래 이야기 그림책.',
        fullDesc: '이억배 작가가 글을 쓰고 그림을 그린 작품으로, 옛이야기를 주머니에 담아두면 어떤 일이 벌어지는지를 통해 이야기의 힘과 소중함을 전합니다. 한국 전통 민화의 기법을 현대적으로 재해석한 풍부한 그림이 돋보이며, 2010년 IBBY 어너리스트에 선정되었습니다.',
        awards: ['IBBY 어너리스트 선정 (2010)'],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=50961'
    },
    {
        id: 'dmz',
        title: '비무장지대에 봄이 오면',
        year: 2010,
        publisher: '사계절',
        category: 'peace',
        tag: '평화',
        coverColor: '#8FB5A2',
        isbn: '9788958284918',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788958284918.jpg',
            'https://image.aladin.co.kr/product/3628/2/cover500/8958284918_1.jpg',
            'images/dmz.jpg'
        ],
        shortDesc: '분단의 땅 비무장지대에 찾아온 봄, 평화에 대한 염원을 담은 그림책.',
        fullDesc: '이억배 작가가 글을 쓰고 그림을 그린 작품입니다. 전쟁이 멈춘 비무장지대에 자연이 돌아오고 봄이 찾아오는 모습을 통해, 평화에 대한 간절한 염원을 담았습니다. 영문판 "When Spring Comes to the DMZ"는 2020년 미국도서관협회(ALA) 배첼더 아너에 선정되었으며, 커커스 리뷰 올해 최고의 그림책에도 선정되었습니다.',
        awards: ['ALA 배첼더 아너 (2020)', '프리먼 어워드 가작 (2019)', '커커스 리뷰 올해 최고의 그림책'],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=362802'
    },
    {
        id: 'bomi',
        title: '봄이의 여행',
        year: 2019,
        publisher: '이야기꽃',
        category: 'peace',
        tag: '평화',
        coverColor: '#C5B8A5',
        isbn: '9788998751425',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788998751425.jpg',
            'https://image.aladin.co.kr/product/1960149/44/cover500/8998751429_1.jpg',
            'images/bomi.jpg'
        ],
        shortDesc: '분단의 현실 속에서 꽃 피는 한반도의 꿈을 담은 그림책.',
        fullDesc: '이억배 작가가 글을 쓰고 그림을 그린 작품입니다. 반세기가 지난 오늘, 화가 이억배가 여전히 슬픈 분단의 현실 속에서 또 다른 "꽃 피는 한반도의 꿈"을 꾸고, 그것을 그림책으로 옮겨 놓은 작품입니다. 평화에 대한 염원을 아이들의 눈높이에서 아름답게 표현했습니다.',
        awards: [],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=196014944'
    },
    {
        id: 'hanjang',
        title: '한 장 한 장 그림책',
        year: 2020,
        publisher: '사계절',
        category: 'life',
        tag: '생활·학습',
        coverColor: '#808080',
        isbn: '9791160946215',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791160946215.jpg',
            'https://image.aladin.co.kr/product/30213/68/cover500/k902835238_1.jpg',
            'images/hanjang.jpg'
        ],
        shortDesc: '그림책의 세계를 한 장 한 장 펼쳐 보여주는 이억배 작가의 그림책.',
        fullDesc: '이억배 작가가 글을 쓰고 그림을 그린 작품으로, 그림책이 만들어지는 과정과 그림책을 읽는 즐거움을 다양한 동물 캐릭터들과 함께 풍성하게 담아냈습니다. 도서관에서 책을 읽는 동물들의 다채로운 모습을 통해 그림책이 주는 기쁨과 상상력을 전합니다.',
        awards: [],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=2484123'
    },
    {
        id: 'seagull',
        title: '갈매기에게 나는 법을 가르쳐준 고양이',
        year: 2003,
        publisher: '바다출판사 (글: 루이스 세뿔베다, 옮김: 유왕무)',
        category: 'life',
        tag: '생활·학습',
        coverColor: '#5A7A8A',
        isbn: '9788955617672',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788955617672.jpg',
            'https://image.aladin.co.kr/product/78/12/cover500/8955617670_1.jpg',
            'images/seagull.jpg'
        ],
        shortDesc: '약속을 지키기 위해 갈매기를 돌보는 고양이의 감동적인 이야기.',
        fullDesc: '루이스 세뿔베다 원작, 유왕무 옮김, 이억배 그림으로 만들어진 작품입니다. 죽어가는 갈매기에게 알을 돌봐달라는 부탁을 받은 검은 고양이 조르바가, 약속을 지키기 위해 갈매기 새끼를 키우고 나는 법까지 가르쳐주는 이야기입니다. 8세부터 88세까지 읽는 동화로, 이억배 작가의 따뜻한 그림이 원작의 감동을 더합니다.',
        awards: [],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=7812'
    },
    {
        id: 'fivegeneration',
        title: '5대 가족',
        year: 2016,
        publisher: '바우솔 (시: 고은)',
        category: 'peace',
        tag: '평화',
        coverColor: '#C4A56A',
        isbn: '9788993843316',
        images: [
            'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788993843316.jpg',
            'https://image.aladin.co.kr/product/3969/51/cover500/8993843317_1.jpg',
            'images/fivegeneration.jpg'
        ],
        shortDesc: '고은 시인의 시에 이억배 작가가 그림을 그린 그림책.',
        fullDesc: '고은 시인의 시에 이억배 작가가 그림을 그린 작품입니다. 티베트 고원의 험준한 산길을 걸어가는 5대 가족의 여정을 통해, 가족의 의미와 세대를 이어가는 삶의 이야기를 담았습니다. 광활한 자연 속 인간의 작은 존재감, 그러나 강인한 생명력을 이억배 특유의 세밀한 수채화로 표현했습니다.',
        awards: [],
        link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=899086'
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
