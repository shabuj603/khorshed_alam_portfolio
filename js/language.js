const translations = {
  en: {
    hero_title: "Senior Web Developer",
    hero_subtitle: "I build modern web applications using Laravel & React",
    hero_btn: "Contact Me"
  },
  bn: {
    hero_title: "সিনিয়র ওয়েব ডেভেলপার",
    hero_subtitle: "আমি Laravel ও React দিয়ে আধুনিক ওয়েব অ্যাপ তৈরি করি",
    hero_btn: "যোগাযোগ করুন"
  }
};

function setLanguage(lang) {
  // ১. টেক্সট ট্রান্সলেশন পরিবর্তন করা
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // ২. লোকাল স্টোরেজে সেভ করা
  localStorage.setItem("lang", lang);

  // ৩. অ্যাক্টিভ বাটন ক্লাস পরিবর্তন করা (নিরাপদ ও ডাইনামিক উপায়)
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.remove("lang-active");
  });

  // এলিমেন্টটি পেজে থাকলেই কেবল ক্লাস অ্যাড করবে, ফলে কোনো এরর আসবে না
  const activeBtn = document.getElementById(`btn-${lang}`);
  if (activeBtn) {
    activeBtn.classList.add("lang-active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);
});