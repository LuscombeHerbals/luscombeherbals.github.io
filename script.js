// ============================================================
// Luscombe Herbals — Main JavaScript
// Minimal, native, no dependencies.
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

    // ----- Mobile nav toggle -----
    const navToggle = document.getElementById('navToggle');
    const primaryNav = document.getElementById('primaryNav');

    if (navToggle && primaryNav) {
        navToggle.addEventListener('click', function () {
            const isOpen = primaryNav.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close nav on link click (mobile)
        primaryNav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                primaryNav.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ----- Simple cart counter (demo) -----
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        // Demo: show "1" if there's a cart param, else 0
        const urlParams = new URLSearchParams(window.location.search);
        const hasItem = urlParams.get('add') !== null;
        cartCount.textContent = hasItem ? '1' : '0';
    }

    // ----- Featured products (render from data) -----
    const featuredGrid = document.getElementById('featuredGrid');
    if (featuredGrid) {
        const products = [
            {
                name: 'Gumby Gumby',
                price: '$40',
                pack: '200 capsule pack',
                ingredients: '100% Gumby Gumby leaf (<em class="latin">Pittosporum angustifolium</em>)',
                image: 'assets/images/product-gumby.jpg',
                url: 'products.html#gumby',
                enquiry: false
            },
            {
                name: 'Garlic & Olive Leaf',
                price: '$30',
                pack: '200 capsule pack',
                ingredients: '50% Garlic, 50% Olive Leaf (extract 5:1)',
                image: 'assets/images/product-garlic.jpg',
                url: 'products.html#garlic',
                enquiry: false
            },
            {
                name: 'Turmeric Blend',
                price: '$35',
                pack: '200 capsule pack',
                ingredients: '70% Turmeric, 20% Cayenne, 10% Black Pepper',
                image: 'assets/images/product-turmeric.jpg',
                url: 'products.html#turmeric',
                enquiry: false
            }
        ];

        featuredGrid.innerHTML = products.map(function (p) {
            return `
                <div class="product-card">
                    <div class="product-card-image">
                        <img src="${p.image}" alt="${p.name}" loading="lazy" />
                    </div>
                    <div class="product-card-body">
                        <h3>${p.name}</h3>
                        <div class="price">${p.price}</div>
                        <div class="pack">${p.pack}</div>
                        <div class="ingredients">Contains: ${p.ingredients}</div>
                        <a href="${p.url}" class="btn ${p.enquiry ? 'btn-enquiry' : 'btn-outline'}">
                            ${p.enquiry ? 'Enquire' : 'View product'}
                        </a>
                    </div>
                </div>
            `;
        }).join('');
    }

    // ----- Journal snippets -----
    const journalGrid = document.getElementById('journalGrid');
    if (journalGrid) {
        const articles = [
            {
                title: 'What is Gumby Gumby?',
                date: '12 August 2026',
                excerpt: 'An introduction to Pittosporum angustifolium and its long history of use.',
                image: 'assets/images/journal-herbal.jpg',
                url: 'journal-article.html?slug=gumby-intro'
            },
            {
                title: 'Our Harvesting Process',
                date: '5 August 2026',
                excerpt: 'How we identify, harvest, and prepare Gumby Gumby leaves in Clermont.',
                image: 'assets/images/approach-harvest.jpg',
                url: 'journal-article.html?slug=harvesting'
            },
            {
                title: 'Native Plants of Central Queensland',
                date: '28 July 2026',
                excerpt: 'A closer look at the native botanicals that grow in our region.',
                image: 'assets/images/gumby-tree.jpg',
                url: 'journal-article.html?slug=native-plants'
            }
        ];

        journalGrid.innerHTML = articles.map(function (a) {
            return `
                <div class="journal-card">
                    <div class="journal-card-image">
                        <img src="${a.image}" alt="${a.title}" loading="lazy" />
                    </div>
                    <div class="journal-card-body">
                        <div class="date">${a.date}</div>
                        <h3><a href="${a.url}">${a.title}</a></h3>
                        <p class="excerpt">${a.excerpt}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

});