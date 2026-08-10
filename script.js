// Parker Renovations — shared scripts + EN/SK i18n

var LANG_KEY = "pr-lang";
var DEFAULT_LANG = "en";

var translations = {
  en: {
    // Shared chrome
    "meta.title.home": "Parker Renovations — Home",
    "meta.title.about": "About — Parker Renovations",
    "meta.title.gallery": "Gallery — Parker Renovations",
    "meta.title.contact": "Contact — Parker Renovations",
    "aria.openMenu": "Open menu",
    "aria.closeMenu": "Close menu",
    "nav.menu": "Menu",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "lang.label": "Language",
    "lang.en": "English",
    "lang.sk": "Slovak",
    "logo.tagline": "Kitchens · Baths · Whole-home remodels",
    "footer.rights": "© 2026 Parker Renovations. All rights reserved.",

    // Home
    "home.hero.title": "Home renovations done right",
    "home.hero.text":
      "We’re a local construction company focused on residential renovations. From a single bathroom update to a full kitchen remodel, we handle the work carefully and keep you in the loop.",
    "home.hero.estimate": "Get a free estimate",
    "home.hero.work": "See our work",
    "home.services.title": "What we do",
    "home.kitchen.title": "Kitchen remodels",
    "home.kitchen.text":
      "Cabinets, counters, flooring, lighting, and layout changes. We work with your budget and timeline.",
    "home.bath.title": "Bathroom renovations",
    "home.bath.text":
      "Tile, fixtures, vanities, showers, and accessibility upgrades for full or half baths.",
    "home.interior.title": "Interior renovations",
    "home.interior.text":
      "Basements, living rooms, flooring, doors, trim, and other interior finish work.",
    "home.additions.title": "Additions & structural",
    "home.additions.text":
      "Room additions, wall removal, and structural changes when permitted by code. Licensed and insured.",
    "home.why.title": "Why hire us",
    "home.why.p1":
      "We’ve been renovating homes in the area for over 15 years. Most of our jobs come from referrals. We give written estimates, stick to agreed schedules as best we can, and clean up at the end of each day.",
    "home.why.p2":
      "Not sure where to start? Call or send a message — we’ll walk through your project and tell you honestly what makes sense.",
    "home.why.about": "About the company",

    // About
    "about.title": "About us",
    "about.img.alt": "Parker Renovations crew on a job site",
    "about.p1":
      "Parker Renovations started as a one-man carpentry business and grew into a small crew that focuses on residential remodels. We don’t do new commercial builds — we renovate existing homes, and we stick to that.",
    "about.p2":
      "Most projects are kitchens, bathrooms, and interior updates for homeowners who want the work done carefully without a huge general contractor markup. We pull permits when required, coordinate with inspectors, and keep a clean job site.",
    "about.p3":
      "Our crew includes carpenters, a tiler we work with regularly, and licensed electricians and plumbers for the parts of the job that need them. You deal with one point of contact from estimate to final walkthrough.",
    "about.p4":
      'If you’d like to see finished projects, visit the <a href="gallery.html">gallery</a>. Ready to talk about your house? Use the <a href="contact.html">contact form</a> or call us directly.',
    "about.contact.title": "Contact information",
    "about.phone": "Phone:",
    "about.email": "Email:",
    "about.hours": "Hours:",
    "about.hours.value": "Mon–Fri 7:30am–5:00pm · Sat by appointment",
    "about.license": "Licensed & insured · License #CR-44821",

    // Gallery
    "gallery.title": "Project gallery",
    "gallery.intro":
      "A few recent before-and-after jobs. Photos are stand-ins for now — swap them for your real project shots when you have them.",
    "gallery.before": "Before",
    "gallery.after": "After",
    "gallery.p1.title": "Kitchen remodel — Oak Street",
    "gallery.p1.meta": "Full gut · new cabinets, counters, and flooring · 7 weeks",
    "gallery.p1.before.alt": "Kitchen before renovation",
    "gallery.p1.after.alt": "Kitchen after renovation",
    "gallery.p2.title": "Master bath — Hillcrest",
    "gallery.p2.meta": "Walk-in shower, dual vanity, new tile · 4 weeks",
    "gallery.p2.before.alt": "Bathroom before renovation",
    "gallery.p2.after.alt": "Bathroom after renovation",
    "gallery.p3.title": "Basement finish — Maple Lane",
    "gallery.p3.meta": "Framing, drywall, flooring, half bath · 9 weeks",
    "gallery.p3.before.alt": "Basement before renovation",
    "gallery.p3.after.alt": "Basement after renovation",
    "gallery.p4.title": "Living room open-up — Cedar Ave",
    "gallery.p4.meta": "Load-bearing wall removal, new beam, flooring · 3 weeks",
    "gallery.p4.before.alt": "Living room before renovation",
    "gallery.p4.after.alt": "Living room after renovation",
    "gallery.cta":
      'Want something like this for your place? <a href="contact.html">Request an estimate</a>.',

    // Contact
    "contact.title": "Contact us",
    "contact.intro":
      'Tell us a bit about your project and we’ll get back to you, usually within one business day. Or call <a href="tel:5552347800">(555) 234-7800</a>.',
    "contact.form.title": "Send a message",
    "contact.label.name": "Name *",
    "contact.label.email": "Email *",
    "contact.label.phone": "Phone",
    "contact.label.project": "Project type",
    "contact.label.message": "Message *",
    "contact.option.select": "— select —",
    "contact.option.kitchen": "Kitchen remodel",
    "contact.option.bath": "Bathroom renovation",
    "contact.option.interior": "Interior renovation",
    "contact.option.addition": "Addition / structural",
    "contact.option.other": "Other",
    "contact.placeholder.message":
      "What are you looking to renovate? Rough timeline or budget helps.",
    "contact.submit": "Send message",
    "contact.note":
      "Submitting opens your email app with the message filled in, addressed to info@parkerrenovations.com. You still need to hit send in your mail program.",
    "contact.other.title": "Other ways to reach us",
    "contact.phone": "Phone:",
    "contact.email": "Email:",
    "contact.office": "Office:",
    "contact.hours": "Hours:",
    "contact.hours.value": "Mon–Fri 7:30am–5:00pm",
    "contact.err.required": "Please fill in your name, email, and message.",
    "contact.ok.sent":
      "Opening your email app so you can send the message. If nothing opens, email us at info@parkerrenovations.com.",
    "contact.mail.subject": "Website inquiry from {name}",
    "contact.mail.name": "Name",
    "contact.mail.email": "Email",
    "contact.mail.phone": "Phone",
    "contact.mail.project": "Project type",
    "contact.mail.message": "Message",
    "contact.mail.notProvided": "(not provided)",
    "contact.mail.notSpecified": "(not specified)"
  },

  sk: {
    // Shared chrome
    "meta.title.home": "Parker Renovations — Domov",
    "meta.title.about": "O nás — Parker Renovations",
    "meta.title.gallery": "Galéria — Parker Renovations",
    "meta.title.contact": "Kontakt — Parker Renovations",
    "aria.openMenu": "Otvoriť menu",
    "aria.closeMenu": "Zavrieť menu",
    "nav.menu": "Menu",
    "nav.home": "Domov",
    "nav.about": "O nás",
    "nav.gallery": "Galéria",
    "nav.contact": "Kontakt",
    "lang.label": "Jazyk",
    "lang.en": "English",
    "lang.sk": "Slovenčina",
    "logo.tagline": "Kuchyne · Kúpeľne · Kompletné rekonštrukcie",
    "footer.rights": "© 2026 Parker Renovations. Všetky práva vyhradené.",

    // Home
    "home.hero.title": "Renovácie domov urobené poriadne",
    "home.hero.text":
      "Sme miestna stavebná firma zameraná na rezidenčné renovácie. Od úpravy jednej kúpeľne po kompletnú rekonštrukciu kuchyne — prácu robíme starostlivo a držíme vás v obraze.",
    "home.hero.estimate": "Získať bezplatnú ponuku",
    "home.hero.work": "Pozrieť naše práce",
    "home.services.title": "Čo robíme",
    "home.kitchen.title": "Rekonštrukcie kuchýň",
    "home.kitchen.text":
      "Skriňky, pracovné dosky, podlahy, osvetlenie a zmeny dispozície. Pracujeme s vaším rozpočtom a termínom.",
    "home.bath.title": "Renovácie kúpeľní",
    "home.bath.text":
      "Dlažba, armatúry, umývadlové skrinky, sprchy a bezbariérové úpravy pre plné aj polovičné kúpeľne.",
    "home.interior.title": "Interiérové renovácie",
    "home.interior.text":
      "Suterény, obývačky, podlahy, dvere, lišty a iné interiérové dokončovacie práce.",
    "home.additions.title": "Prístavby a konštrukcie",
    "home.additions.text":
      "Prístavby izieb, odstraňovanie stien a konštrukčné zmeny v súlade s predpismi. Licencovaní a poistení.",
    "home.why.title": "Prečo si nás vybrať",
    "home.why.p1":
      "Renovujeme domy v okolí už viac ako 15 rokov. Väčšina zákaziek prichádza z odporúčaní. Dávame písomné ponuky, držíme sa dohodnutých termínov podľa možností a na konci každého dňa upratujeme.",
    "home.why.p2":
      "Neviete, kde začať? Zavolajte alebo napíšte — prejdeme si váš projekt a úprimne povieme, čo dáva zmysel.",
    "home.why.about": "O firme",

    // About
    "about.title": "O nás",
    "about.img.alt": "Posádka Parker Renovations na stavbe",
    "about.p1":
      "Parker Renovations začali ako stolárska živnosť jedného majstra a vyrástli na malú posádku zameranú na rezidenčné rekonštrukcie. Nerobieme nové komerčné stavby — renovujeme existujúce domy a pri tom zostávame.",
    "about.p2":
      "Väčšina projektov sú kuchyne, kúpeľne a interiérové úpravy pre majiteľov domov, ktorí chcú starostlivú prácu bez veľkej marže generálneho dodávateľa. Vybavujeme povolenia, keď sú potrebné, koordinujeme s inšpektormi a držíme čistú stavbu.",
    "about.p3":
      "V posádke sú stolári, obkladač, s ktorým pravidelne spolupracujeme, a licencovaní elektrikári a inštalatéri na časti práce, ktoré ich vyžadujú. Od ponuky po finálnu prehliadku máte jedného kontaktného partnera.",
    "about.p4":
      'Ak si chcete pozrieť hotové projekty, navštívte <a href="gallery.html">galériu</a>. Chcete prebrať váš dom? Použite <a href="contact.html">kontaktný formulár</a> alebo nám zavolajte priamo.',
    "about.contact.title": "Kontaktné údaje",
    "about.phone": "Telefón:",
    "about.email": "E-mail:",
    "about.hours": "Otváracie hodiny:",
    "about.hours.value": "Po–Pi 7:30–17:00 · So po dohode",
    "about.license": "Licencovaní a poistení · Licencia č. CR-44821",

    // Gallery
    "gallery.title": "Galéria projektov",
    "gallery.intro":
      "Niekoľko nedávnych prác pred a po. Fotky sú zatiaľ náhradné — neskôr ich vymeňte za skutočné zábery z projektov.",
    "gallery.before": "Pred",
    "gallery.after": "Po",
    "gallery.p1.title": "Rekonštrukcia kuchyne — Oak Street",
    "gallery.p1.meta": "Kompletná rekonštrukcia · nové skriňky, dosky a podlahy · 7 týždňov",
    "gallery.p1.before.alt": "Kuchyňa pred renováciou",
    "gallery.p1.after.alt": "Kuchyňa po renovácii",
    "gallery.p2.title": "Hlavná kúpeľňa — Hillcrest",
    "gallery.p2.meta": "Sprchový kút, dvojumývadlo, nová dlažba · 4 týždne",
    "gallery.p2.before.alt": "Kúpeľňa pred renováciou",
    "gallery.p2.after.alt": "Kúpeľňa po renovácii",
    "gallery.p3.title": "Dokončenie suterénu — Maple Lane",
    "gallery.p3.meta": "Rámovanie, sadrokartón, podlahy, polovičná kúpeľňa · 9 týždňov",
    "gallery.p3.before.alt": "Suterén pred renováciou",
    "gallery.p3.after.alt": "Suterén po renovácii",
    "gallery.p4.title": "Otvorenie obývačky — Cedar Ave",
    "gallery.p4.meta": "Odstránenie nosnej steny, nový nosník, podlahy · 3 týždne",
    "gallery.p4.before.alt": "Obývačka pred renováciou",
    "gallery.p4.after.alt": "Obývačka po renovácii",
    "gallery.cta":
      'Chcete niečo podobné aj u vás? <a href="contact.html">Požiadať o ponuku</a>.',

    // Contact
    "contact.title": "Kontaktujte nás",
    "contact.intro":
      'Povedzte nám niečo o svojom projekte a ozveme sa, zvyčajne do jedného pracovného dňa. Alebo zavolajte na <a href="tel:5552347800">(555) 234-7800</a>.',
    "contact.form.title": "Poslať správu",
    "contact.label.name": "Meno *",
    "contact.label.email": "E-mail *",
    "contact.label.phone": "Telefón",
    "contact.label.project": "Typ projektu",
    "contact.label.message": "Správa *",
    "contact.option.select": "— vyberte —",
    "contact.option.kitchen": "Rekonštrukcia kuchyne",
    "contact.option.bath": "Renovácia kúpeľne",
    "contact.option.interior": "Interiérová renovácia",
    "contact.option.addition": "Prístavba / konštrukcia",
    "contact.option.other": "Iné",
    "contact.placeholder.message":
      "Čo by ste chceli renovovať? Orientačný termín alebo rozpočet pomôže.",
    "contact.submit": "Odoslať správu",
    "contact.note":
      "Odoslaním sa otvorí váš e-mailový program s predvyplnenou správou na info@parkerrenovations.com. Správu ešte musíte odoslať vo svojom mailovom programe.",
    "contact.other.title": "Ďalšie spôsoby kontaktu",
    "contact.phone": "Telefón:",
    "contact.email": "E-mail:",
    "contact.office": "Kancelária:",
    "contact.hours": "Otváracie hodiny:",
    "contact.hours.value": "Po–Pi 7:30–17:00",
    "contact.err.required": "Vyplňte prosím meno, e-mail a správu.",
    "contact.ok.sent":
      "Otvárame váš e-mailový program, aby ste mohli správu odoslať. Ak sa nič neotvorí, napíšte nám na info@parkerrenovations.com.",
    "contact.mail.subject": "Dopyt z webu od {name}",
    "contact.mail.name": "Meno",
    "contact.mail.email": "E-mail",
    "contact.mail.phone": "Telefón",
    "contact.mail.project": "Typ projektu",
    "contact.mail.message": "Správa",
    "contact.mail.notProvided": "(neuvedené)",
    "contact.mail.notSpecified": "(nešpecifikované)"
  }
};

function getLang() {
  try {
    var stored = localStorage.getItem(LANG_KEY);
    if (stored === "en" || stored === "sk") return stored;
  } catch (e) {
    /* private mode */
  }
  return DEFAULT_LANG;
}

function setLang(lang) {
  if (lang !== "en" && lang !== "sk") lang = DEFAULT_LANG;
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (e) {
    /* private mode */
  }
  applyTranslations(lang);
}

function t(key, lang) {
  lang = lang || getLang();
  var pack = translations[lang] || translations.en;
  if (pack[key] != null) return pack[key];
  if (translations.en[key] != null) return translations.en[key];
  return key;
}

function applyTranslations(lang) {
  lang = lang || getLang();
  document.documentElement.lang = lang;

  // Page title
  var page = document.body.getAttribute("data-page");
  if (page) {
    document.title = t("meta.title." + page, lang);
  }

  // Text content
  var nodes = document.querySelectorAll("[data-i18n]");
  for (var i = 0; i < nodes.length; i++) {
    var el = nodes[i];
    var key = el.getAttribute("data-i18n");
    var value = t(key, lang);
    if (el.tagName === "TITLE") {
      el.textContent = value;
    } else {
      el.textContent = value;
    }
  }

  // HTML content (links inside)
  var htmlNodes = document.querySelectorAll("[data-i18n-html]");
  for (var j = 0; j < htmlNodes.length; j++) {
    var hEl = htmlNodes[j];
    hEl.innerHTML = t(hEl.getAttribute("data-i18n-html"), lang);
  }

  // Attributes: data-i18n-attr="placeholder,aria-label,alt,title"
  var attrNodes = document.querySelectorAll("[data-i18n-attr]");
  for (var k = 0; k < attrNodes.length; k++) {
    var aEl = attrNodes[k];
    var map = aEl.getAttribute("data-i18n-attr");
    // format: "placeholder:key;aria-label:key2;alt:key3"
    var parts = map.split(";");
    for (var p = 0; p < parts.length; p++) {
      var pair = parts[p].split(":");
      if (pair.length < 2) continue;
      var attrName = pair[0].trim();
      var attrKey = pair.slice(1).join(":").trim();
      aEl.setAttribute(attrName, t(attrKey, lang));
    }
  }

  // Option elements by data-i18n on <option>
  // (already covered by data-i18n textContent)

  // Language switcher active state
  var buttons = document.querySelectorAll(".lang-btn");
  for (var b = 0; b < buttons.length; b++) {
    var btn = buttons[b];
    var btnLang = btn.getAttribute("data-lang");
    var isActive = btnLang === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  }

  // Menu toggle aria (open state depends on nav)
  var toggle = document.querySelector(".menu-toggle");
  var sideNav = document.getElementById("side-nav");
  if (toggle) {
    var open = sideNav && sideNav.classList.contains("is-open");
    toggle.setAttribute(
      "aria-label",
      open ? t("aria.closeMenu", lang) : t("aria.openMenu", lang)
    );
  }

  var closeBtn = document.querySelector(".menu-close");
  if (closeBtn) {
    closeBtn.setAttribute("aria-label", t("aria.closeMenu", lang));
  }
}

function initLanguageSwitcher() {
  var switcher = document.querySelector(".lang-switcher");
  if (!switcher) return;

  switcher.addEventListener("click", function (e) {
    var btn = e.target.closest(".lang-btn");
    if (!btn) return;
    var lang = btn.getAttribute("data-lang");
    if (!lang) return;
    setLang(lang);
  });

  applyTranslations(getLang());
}

function setActiveNav() {
  var path = window.location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll(".side-nav nav a");
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute("href");
    if (href === path) {
      links[i].classList.add("active");
    } else {
      links[i].classList.remove("active");
    }
  }
}

function initSideNav() {
  var toggle = document.querySelector(".menu-toggle");
  var closeBtn = document.querySelector(".menu-close");
  var sideNav = document.getElementById("side-nav");
  var overlay = document.getElementById("nav-overlay");
  var scrollY = 0;

  if (!toggle || !sideNav || !overlay) return;

  function openNav() {
    scrollY = window.scrollY || window.pageYOffset || 0;
    sideNav.classList.add("is-open");
    sideNav.setAttribute("aria-hidden", "false");
    overlay.hidden = false;
    void overlay.offsetWidth;
    overlay.classList.add("is-visible");
    document.body.classList.add("nav-open");
    document.body.style.top = "-" + scrollY + "px";
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", t("aria.closeMenu"));
    if (closeBtn) closeBtn.focus();
  }

  function closeNav() {
    sideNav.classList.remove("is-open");
    sideNav.setAttribute("aria-hidden", "true");
    overlay.classList.remove("is-visible");
    document.body.classList.remove("nav-open");
    document.body.style.top = "";
    window.scrollTo(0, scrollY);
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", t("aria.openMenu"));
    toggle.focus();

    function onOverlayEnd() {
      if (!overlay.classList.contains("is-visible")) {
        overlay.hidden = true;
      }
      overlay.removeEventListener("transitionend", onOverlayEnd);
    }
    overlay.addEventListener("transitionend", onOverlayEnd);
  }

  function toggleNav() {
    if (sideNav.classList.contains("is-open")) {
      closeNav();
    } else {
      openNav();
    }
  }

  toggle.addEventListener("click", toggleNav);
  if (closeBtn) closeBtn.addEventListener("click", closeNav);
  overlay.addEventListener("click", closeNav);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && sideNav.classList.contains("is-open")) {
      closeNav();
    }
  });

  sideNav.addEventListener("keydown", function (e) {
    if (e.key !== "Tab" || !sideNav.classList.contains("is-open")) return;

    var focusable = sideNav.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;

    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}

function handleContactForm(e) {
  e.preventDefault();

  var form = e.target;
  var msg = document.getElementById("form-msg");
  var name = form.name.value.trim();
  var email = form.email.value.trim();
  var phone = form.phone.value.trim();
  var project = form.project.value;
  var message = form.message.value.trim();
  var lang = getLang();

  if (!name || !email || !message) {
    msg.className = "form-msg show err";
    msg.textContent = t("contact.err.required", lang);
    return;
  }

  var subject = t("contact.mail.subject", lang).replace("{name}", name);
  var body =
    t("contact.mail.name", lang) + ": " + name + "\n" +
    t("contact.mail.email", lang) + ": " + email + "\n" +
    t("contact.mail.phone", lang) + ": " +
      (phone || t("contact.mail.notProvided", lang)) + "\n" +
    t("contact.mail.project", lang) + ": " +
      (project || t("contact.mail.notSpecified", lang)) + "\n\n" +
    t("contact.mail.message", lang) + ":\n" + message;

  var mailto =
    "mailto:info@parkerrenovations.com" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  msg.className = "form-msg show ok";
  msg.textContent = t("contact.ok.sent", lang);

  window.location.href = mailto;
  form.reset();
}

document.addEventListener("DOMContentLoaded", function () {
  initLanguageSwitcher();
  setActiveNav();
  initSideNav();

  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", handleContactForm);
  }
});
