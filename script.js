// ==============================
// File: script.js
// Deskripsi: Script interaktif untuk website Wisata Gunung Bromo
// Dibuat: 2025
// ==============================

// Tunggu hingga halaman selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // ------------------------------
    // 1. Form Pemesanan / Kontak
    // ------------------------------
    const form = document.getElementById('bookingForm');
    const statusMessage = document.getElementById('statusMessage');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // cegah reload halaman

            // Ambil nilai input
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validasi sederhana
            if (!name || !email || !phone || !message) {
                statusMessage.style.color = 'red';
                statusMessage.textContent = 'Harap isi semua kolom!';
                return;
            }

            // Tampilkan pesan sukses
            statusMessage.style.color = 'green';
            statusMessage.textContent = `Terima kasih ${name}, pesan Anda telah terkirim!`;

            // Reset form
            form.reset();
        });
    }

    // ------------------------------
    // 2. Animasi Scroll / Smooth Scroll
    // ------------------------------
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ------------------------------
    // 3. Tambahan Interaktif (Opsional)
    // ------------------------------
    // Contoh: Tombol kembali ke atas
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ------------------------------
    // 4. Tambahkan fungsi JS lainnya di bawah
    // ------------------------------
    
});
