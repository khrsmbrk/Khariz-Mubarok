document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Dummy Data
    const quickAccess = [
        { id: 1, title: 'Jadwal Dokter', icon: '📅', link: '#' },
        { id: 2, title: 'Pendaftaran', icon: '📝', link: 'portal.html' },
        { id: 3, title: 'Kamar Inap', icon: '🛏️', link: '#' },
        { id: 4, title: 'Karir', icon: '💼', link: '#' },
        { id: 5, title: 'Pengaduan', icon: '💬', link: '#' }
    ];

    const services = [
        { id: 1, title: 'IGD 24 Jam', desc: 'Pelayanan gawat darurat dengan respon cepat dan tenaga medis profesional.' },
        { id: 2, title: 'Poliklinik Spesialis', desc: 'Layanan rawat jalan dengan berbagai dokter spesialis dan subspesialis.' },
        { id: 3, title: 'Laboratorium', desc: 'Fasilitas diagnostik lengkap dan modern untuk hasil yang akurat.' }
    ];

    const news = [
        { id: 1, title: 'RSUMLA Raih Akreditasi Paripurna', date: '15 Mar 2026', img: 'https://picsum.photos/seed/news1/400/300' },
        { id: 2, title: 'Seminar Kesehatan Jantung', date: '10 Mar 2026', img: 'https://picsum.photos/seed/news2/400/300' },
        { id: 3, title: 'Peresmian Gedung Baru', date: '05 Mar 2026', img: 'https://picsum.photos/seed/news3/400/300' }
    ];

    // Render Quick Access
    const quickAccessGrid = document.getElementById('quickAccessGrid');
    quickAccess.forEach(item => {
        quickAccessGrid.innerHTML += `
            <a href="${item.link}" class="quick-card">
                <div class="quick-icon">${item.icon}</div>
                <h4>${item.title}</h4>
            </a>
        `;
    });

    // Render Services
    const servicesGrid = document.getElementById('servicesGrid');
    services.forEach(item => {
        servicesGrid.innerHTML += `
            <div class="service-card">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        `;
    });

    // Render News
    const newsGrid = document.getElementById('newsGrid');
    news.forEach(item => {
        newsGrid.innerHTML += `
            <div class="news-card">
                <img src="${item.img}" alt="${item.title}" loading="lazy" referrerpolicy="no-referrer">
                <div class="news-content">
                    <small>${item.date}</small>
                    <h3>${item.title}</h3>
                    <a href="#" style="color: var(--primary); text-decoration: none; font-weight: bold;">Baca selengkapnya &rarr;</a>
                </div>
            </div>
        `;
    });
});
