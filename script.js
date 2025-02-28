document.addEventListener("DOMContentLoaded", function() {
    // Menghilangkan preloader setelah halaman dimuat
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
    }, 1000);
});

// Fungsi untuk mengarahkan langsung ke WhatsApp saat tombol beli ditekan
function beliProduk() {
    window.location.href = "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20membeli%20Kripik%20Tempe.";
}

// Fungsi untuk menampilkan tombol kembali ke atas saat scroll
window.onscroll = function() {
    let backToTop = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

// Fungsi untuk kembali ke atas saat tombol diklik
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
