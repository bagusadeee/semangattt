const daftarPesan = [
  "dee, kamu adalah alasan mass tersenyum setiap hari ❤️",
  "dedee itu istimewa, jangan pernah lupa ya! 🌟",
  "apapun harinya, dedee selalu hebat 💪",
  "tetap semangat dee, mass selalu dukung dedee 💖",
  "kalau lelah, ingat mass yang selalu ada buat dedee 💞"
];

const musik = document.getElementById("musik");
let musikDimulai = false;

function pesanBaru() {
  const pesan = daftarPesan[Math.floor(Math.random() * daftarPesan.length)];
  document.getElementById("pesan").innerText = pesan;

  // Mulai musik setelah klik pertama
  if (!musikDimulai) {
    musik.play().catch(() => {});
    musikDimulai = true;
  }

  // Tambahkan hati jatuh
  buatHati();
}

function kirimWA() {
  const pesan = document.getElementById("pesan").innerText;
  const url = "https://wa.me/?text=" + encodeURIComponent(pesan);
  window.open(url, "_blank");
}

function buatHati() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (2 + Math.random() * 3) + "s";
  document.getElementById("hearts-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
