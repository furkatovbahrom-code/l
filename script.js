let currentLang = "uz";

const text = {
  uz: {
    navHome: "Home",
    navAbout: "Mahsulot",
    navFaq: "Savollar",
    title: "Yoqilg‘ini tejang",
    subtitle: "B-ECO Fuel Tabs",
    aboutTitle: "B-ECO Fuel Tabs nima?",
    aboutText: "Yoqilg‘i sarfini kamaytiradi",
    card1: "⛽️ Tejamkor",
    card2: "🛠 Himoya",
    card3: "🌱 Ekologik",
    faqTitle: "Savollar",
    q1: "Qanday ishlaydi?",
    a1: "Yonishni yaxshilaydi",
    q2: "Qanday qo‘llanadi?",
    a2: "Bakga solinadi"
  }
};

function setLang(l) {
  for (let k in text[l]) {
    const el = document.getElementById(k);
    if (el) el.innerText = text[l][k];
  }
}

function toggleFaq(n) {
  const el = document.getElementById("a" + n);
  el.style.display = el.style.display === "block" ? "none" : "block";
}

function openFuel() {
  document.getElementById("fuelModal").style.display = "flex";
}
function closeFuel() {
  document.getElementById("fuelModal").style.display = "none";
}

function openVideo() {
  document.getElementById("videoModal").style.display = "flex";
}
function closeVideo() {
  document.getElementById("videoModal").style.display = "none";
}

window.onload = () => {
  setLang("uz");
  setTimeout(() => {
    const intro = document.getElementById("intro");
    if (intro) intro.remove();
  }, 3000);
};
