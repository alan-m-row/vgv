// Parker Renovations — shared scripts

function setActiveNav() {
  var path = window.location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll(".side-nav nav a");
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute("href");
    if (href === path) {
      links[i].className = "active";
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
    // Remember scroll so iOS fixed-body lock doesn't jump
    scrollY = window.scrollY || window.pageYOffset || 0;
    sideNav.classList.add("is-open");
    sideNav.setAttribute("aria-hidden", "false");
    overlay.hidden = false;
    // Force reflow so the opacity transition runs
    void overlay.offsetWidth;
    overlay.classList.add("is-visible");
    document.body.classList.add("nav-open");
    document.body.style.top = "-" + scrollY + "px";
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
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
    toggle.setAttribute("aria-label", "Open menu");
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

  // Close on Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && sideNav.classList.contains("is-open")) {
      closeNav();
    }
  });

  // Basic focus trap while menu is open
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

  if (!name || !email || !message) {
    msg.className = "form-msg show err";
    msg.textContent = "Please fill in your name, email, and message.";
    return;
  }

  // Build a plain email and open the visitor's mail app
  var subject = "Website inquiry from " + name;
  var body =
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Phone: " + (phone || "(not provided)") + "\n" +
    "Project type: " + (project || "(not specified)") + "\n\n" +
    "Message:\n" + message;

  var mailto =
    "mailto:info@parkerrenovations.com" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  msg.className = "form-msg show ok";
  msg.textContent =
    "Opening your email app so you can send the message. If nothing opens, email us at info@parkerrenovations.com.";

  window.location.href = mailto;
  form.reset();
}

document.addEventListener("DOMContentLoaded", function () {
  setActiveNav();
  initSideNav();

  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", handleContactForm);
  }
});
