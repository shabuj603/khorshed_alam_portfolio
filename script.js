function setLanguage(lang){

  document.querySelectorAll("[data-key]").forEach(el=>{
    const key = el.dataset.key;
    if(translations[lang][key]){
      el.innerHTML = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);

  document.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.classList.remove("lang-active");
  });

  if(lang === "en"){
    document.getElementById("btn-en").classList.add("lang-active");
  }else{
    document.getElementById("btn-bn").classList.add("lang-active");
  }
}

document.addEventListener("DOMContentLoaded", ()=>{
  setLanguage(localStorage.getItem("lang") || "en");
});

var typed = new Typed("#typed", {
        strings: [
          "Laravel Developer.",
          "React Developer.",
          "WordPress Expert.",
          "Full Stack Web Developer.",
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
      });

         emailjs.init("QRihRTPo6T-4Fzv_d");

      const form = document.getElementById("contact-form");
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const btnText = document.getElementById("btn-text");
        const btnIcon = document.getElementById("btn-icon");
        btnText.textContent = "Sending...";
        btnIcon.classList.add("fa-spin");

        const params = {
          from_name: document.getElementById("name").value,
          from_email: document.getElementById("email").value,
          subject: document.getElementById("subject").value,
          message: document.getElementById("message").value,
        };

        emailjs
          .send("service_fqumemw", "template_q3a4irc", params)
          .then(() =>
            document
              .getElementById("success-message")
              .classList.remove("hidden"),
          )
          .catch(() =>
            document.getElementById("error-message").classList.remove("hidden"),
          )
          .finally(() => {
            btnText.textContent = "Send Message";
            btnIcon.classList.remove("fa-spin");
            form.reset();
          });
      });

      // Animation on Scroll
      window.addEventListener("scroll", () => {
        document.querySelectorAll(".animate-on-scroll").forEach((el) => {
          if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
            el.classList.add("visible");
          }
        });
      });

      function toggleDarkMode() {
        document.documentElement.classList.toggle("dark");
      }
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            }
          });
        },
        {
          threshold: 0.2,
        },
      );

      document
        .querySelectorAll(".animate-on-scroll,.animate-left,.animate-right")
        .forEach((el) => {
          observer.observe(el);
        });

        // ১. ভাষা অনুযায়ী টেক্সটের ডাটাবেজ (Dictionary)
const translations = {
  en: {
    hero_title: "Senior Web Developer",
    hero_desc: "I build modern, fast, and secure websites, e-commerce platforms, and custom web applications using Laravel, React, WordPress, and PHP to help grow your business.",
    hire_me: "Hire Me",
    download_cv: "Download CV",
    about_title: "About Me",
    about_desc: "I am a passionate and experienced full-stack web developer. I build modern, fast, and secure websites, e-commerce platforms, and custom web applications using Laravel, PHP, React, Tailwind CSS, WordPress, WooCommerce, MySQL, and modern JavaScript frameworks.",
    about_desc2: "Over the past few years, I have successfully completed numerous projects — online marketplaces, e-commerce websites, job portals, custom web applications, and WordPress theme-plugin development.",
    about_desc3: "I believe that every project should not only be visually appealing but also fast, secure, and user-friendly. Client satisfaction is my greatest reward.",
    about_desc4: "I don't just write code; I create projects with a focus on user experience (UX) and business growth.",
    projects_title: "My Projects",
    projects_subtitle: "Some selected projects completed by me",
    projects_subtitle2: "A complete online marketplace system where users can buy and sell products.",
    projects_subtitle3: "A modern e-commerce website with product management, cart, and order system.",
    projects_subtitle4: "Custom WordPress plugin development with various features.",
    projects_subtitle5: "Hajj and Umrah management system with package, registration, and payment management.",
    projects_subtitle6: "A modern Point of Sale (POS) system where Sales, Purchase, Inventory, Customer, Supplier, Invoice, Expense, and reports can be easily managed.",
    projects_subtitle7: "Custom web application developed according to user requirements.",
    skills_title: "My Skills",
    skills_subtitle: "Technologies I use efficiently",
    contact_title: "Contact Me"
  },
  bn: {
    hero_title: "সিনিয়র ওয়েব ডেভেলপার",
    hero_desc: "Laravel, React, WordPress ও PHP দিয়ে আধুনিক, দ্রুতগতির এবং নিরাপদ ওয়েবসাইট, ই-কমার্স প্ল্যাটফর্ম ও কাস্টম ওয়েব অ্যাপ্লিকেশন তৈরি করি যা আপনার ব্যবসাকে আরও এগিয়ে নিতে সাহায্য করে।",
    hire_me: "হায়ার মি",
    download_cv: "ডাউনলোড সিভি",
    about_title: "আমার সম্পর্কে",
    about_desc: "আমি একজন উৎসাহী এবং অভিজ্ঞ ফুল-স্ট্যাক ওয়েব ডেভেলপার। Laravel, PHP, React, Tailwind CSS, WordPress, WooCommerce, MySQL এবং আধুনিক JavaScript ফ্রেমওয়ার্ক ব্যবহার করে আধুনিক, দ্রুতগতির এবং নিরাপদ ওয়েবসাইট, ই-কমার্স প্ল্যাটফর্ম এবং কাস্টম ওয়েব অ্যাপ্লিকেশন তৈরি করি।",  
    about_desc2: "গত কয়েক বছরে আমি অনেকগুলো সফল প্রজেক্ট সম্পন্ন করেছি — অনলাইন মার্কেটপ্লেস, ই-কমার্স ওয়েবসাইট, জব পোর্টাল, কাস্টম ওয়েব অ্যাপ্লিকেশন এবং ওয়ার্ডপ্রেস থিম-প্লাগিন ডেভেলপমেন্ট।",   
    about_desc3: "আমি বিশ্বাস করি, প্রতিটি প্রজেক্ট হওয়া উচিত শুধু সুন্দর নয়, বরং দ্রুত, নিরাপদ এবং সহজে ব্যবহারযোগ্য। ক্লায়েন্টের সন্তুষ্টিই আমার সবচেয়ে বড় প্রাপ্তি।",      
    about_desc4: "আমি শুধু কোড লিখি না, ব্যবহারকারীর অভিজ্ঞতা (UX) এবং ব্যবসার প্রবৃদ্ধির কথা মাথায় রেখে প্রজেক্ট তৈরি করি।",
    projects_title: "আমার প্রজেক্টস",
    projects_subtitle: "আমার সম্পন্ন করা কিছু নির্বাচিত প্রজেক্ট",
    projects_subtitle2: " সম্পূর্ণ অনলাইন মার্কেটপ্লেস সিস্টেম। ব্যবহারকারীরা পণ্য ক্রয়-বিক্রয় করতে পারবে।",
    projects_subtitle3: " আধুনিক ই-কমার্স ওয়েবসাইট। পণ্য ম্যানেজমেন্ট, কার্ট এবং অর্ডার সিস্টেম সহ।",
    projects_subtitle4: "কাস্টম ওয়ার্ডপ্রেস প্লাগিন ডেভেলপমেন্ট। বিভিন্ন ফিচার সমৃদ্ধ।",
    projects_subtitle5: "হজ্জ ও উমরাহ ব্যবস্থাপনা সিস্টেম। প্যাকেজ, রেজিস্ট্রেশন এবং পেমেন্ট ম্যানেজমেন্ট।",
    projects_subtitle6: "আধুনিক Point of Sale (POS) সিস্টেম যেখানে Sales, Purchase, Inventory, Customer, Supplier, Invoice, Expense এবং রিপোর্ট সহজেই পরিচালনা করা যায়।",
    projects_subtitle7: "কাস্টম ওয়েব অ্যাপ্লিকেশন। ব্যবহারকারীর চাহিদা অনুযায়ী তৈরি।",
    skills_title: "আমার দক্ষতা",
    skills_subtitle: "প্রযুক্তি যা আমি দক্ষতার সাথে ব্যবহার করি",
    contact_title: "যোগাযোগ করুন"
  }
};

// ২. ভাষা পরিবর্তন করার মূল ফাংশন
function setLanguage(lang) {
  // সব টেক্সট পরিবর্তন করা
  document.querySelectorAll("[data-key]").forEach(element => {
    const key = element.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // বাটনগুলোর অ্যাক্টিভ স্টেট (Active UI) পরিবর্তন করা
  const btnEn = document.getElementById("btn-en");
  const btnBn = document.getElementById("btn-bn");

  if (lang === "en") {
    btnEn.classList.add("bg-indigo-600", "text-white");
    btnEn.classList.remove("text-zinc-600", "dark:text-zinc-400");
    btnBn.classList.remove("bg-indigo-600", "text-white");
    btnBn.classList.add("text-zinc-600", "dark:text-zinc-400");
  } else {
    btnBn.classList.add("bg-indigo-600", "text-white");
    btnBn.classList.remove("text-zinc-600", "dark:text-zinc-400");
    btnEn.classList.remove("bg-indigo-600", "text-white");
    btnEn.classList.add("text-zinc-600", "dark:text-zinc-400");
  }

  // ব্রাউজারের মেমোরিতে ভাষা সেভ করে রাখা যাতে রিফ্রেশ করলেও ঠিক থাকে
  localStorage.setItem("preferred-language", lang);
}

// ৩. সাইট প্রথমবার লোড হওয়ার সময় ডিফল্ট ভাষা সেট করা
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferred-language") || "bn"; // ডিফল্ট বাংলা রাখা হয়েছে
  setLanguage(savedLang);
});