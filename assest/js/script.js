// const datapor = [
//     "../assest/img/profile.png",
//     "/assest/img/imgpoto.jpg"
// ];

// const imgRight = document.querySelector('.right div' );
// let i = 0;

// // Style awal
// imgRight.style.backgroundImage = `url(${datapor[i]})`;
// imgRight.style.backgroundSize = "cover";
// imgRight.style.backgroundPosition = "center";
// imgRight.style.transition = "transform 0.5s ease-in-out";

// // Fungsi ganti gambar dengan geser
// setInterval(() => {
//     // Geser keluar ke kiri
//     imgRight.style.transform = "rotate3d(180deg)";

//     setTimeout(() => {
//         // Ganti gambar setelah keluar
//         i = (i + 1) % datapor.length;
//         imgRight.style.backgroundImage = `url(${datapor[i]})`;

//         // Geser masuk dari kanan
//         imgRight.style.transition = "transform 0.5s ease-in";
//         imgRight.style.transform = "rotate(45deg)";

//         // Pakai delay 1 frame biar transition aktif lagi
//         requestAnimationFrame(() => {
//             imgRight.style.transition = "transform 0.5s ease-in-out";
//             imgRight.style.transform = "translateX(0)";
//         });

//     }, 500); // Waktu geser keluar
// }, 2000); // Interval ganti gambar




document.addEventListener("DOMContentLoaded", function() {
  const extra = document.querySelector(".extra");

  extra.forEach((item, index) => {
      gsap.to(item, {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: "power2.out"
      });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const navLogo = document.querySelectorAll(".nav-logo");

  navLogo.forEach((item, index) => {
      gsap.to(item, {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: "power2.out"
      });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const navItems = document.querySelectorAll(".nav a");

  navItems.forEach((item, index) => {
      gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay: index * 0.8, // Stagger the animation
          ease: "power2.out"
      });
  });
});
gsap.registerPlugin(TextPlugin);

      gsap.to('.left a', {
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay: 0.8, // Stagger the animation
          ease: "power2.out"
      });
    
gsap.to('.text', {duration: 2, delay: 2, text: "Professional Web Developer"});
gsap.to('.text2', {duration: 4, delay: 4, text: "I design and build modern, responsive, and high-performance websites"});
// gsap.from('header', {duration: 1.5, y: -100, opacity: 0, ease: 'bounce'}); 
// gsap.from('.left', {duration: 1.5, delay: 1.5, x: -100, opacity: 0});
gsap.from('.left h4', {duration: 1.5, delay: 1.5, y: 20, opacity: 0});
gsap.from('.left .text1', {duration: 1.5, delay: 1.5, x: -100, opacity: 0});
gsap.from('.left h1', {duration: 1.5, delay: 2.5, x: -100, opacity: 0});
gsap.from('.left a', {duration: 1.5, delay: 2, x: 0, opacity: 0});
gsap.from('.right', {duration: 1.5, delay: 1.5, x: 100, opacity: 0});
gsap.from('.about', {duration: 1.5, delay: 1.5, x: 100, opacity: 0});

const nav = document.querySelector('.nav');
const menu = document.querySelector('.extra');
menu.addEventListener('click', () =>{
    nav.classList.toggle('active');

});

document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !nav.contains(e.target)){
        nav.classList.remove('active');
    }
});


 
  const buttons = document.querySelectorAll('.btn button');
  const cards = document.querySelectorAll('.skills .card');

function filterCards(filter, btn) {
  // reset semua button
  buttons.forEach(b => {
    b.style.backgroundColor = "";
    b.style.color = "black";
    b.style.fontSize = "15px";
  });

  // aktifkan tombol yg dipilih
  btn.style.backgroundColor = btn.getAttribute("data-color");
  btn.style.color = "white";
  btn.style.fontSize = "18px";

  // filter cards dengan animasi
  cards.forEach(card => {

    if (filter === "all" || card.dataset.category === filter) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

  // event click untuk semua button
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute("data-filter");
      filterCards(filter, btn);
    });
  });

  // 👉 set default (langsung aktifin tombol pertama = All Skills)
  window.addEventListener("DOMContentLoaded", () => {
    const defaultBtn = document.querySelector('.btn button[data-filter="all"]');
    filterCards("all", defaultBtn);
  });