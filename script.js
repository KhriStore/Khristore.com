function redirectToWA(quantity) {
  const phone = "+6281289181330";
  const message = `Halo, saya ingin membeli ${quantity}X WDP. Mohon informasi lebih lanjut.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

const messages = [
  "Pilihan terbaik untuk kebutuhan WDP Anda",
  "Diskon hingga 20% untuk pembelian tertentu",
  "Belanja cepat, mudah, dan hemat",
  "Pengiriman cepat instant cihuyyy"
];

let messageIndex = 0;

function updateDynamicText() {
  const dynamicText = document.getElementById("dynamicText");
  messageIndex = (messageIndex + 1) % messages.length;
  dynamicText.textContent = messages[messageIndex];
}

// Ganti teks setiap 4 detik
setInterval(updateDynamicText, 4000);

document.addEventListener("DOMContentLoaded", () => {
  const promos = document.querySelectorAll(".promo");
  promos.forEach((promo, index) => {
      promo.style.animationDelay = `${index * 0.3}s`; // Menambahkan jeda antar elemen
  });
});
