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

  if (!toggle || !sideNav || !overlay) return;

  function openNav() {
    sideNav.classList.add("is-open");
    sideNav.setAttribute("aria-hidden", "false");
    overlay.hidden = false;
    // Force reflow so the opacity transition runs
    void overlay.offsetWidth;
    overlay.classList.add("is-visible");
    document.body.classList.add("nav-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
  }

  function closeNav() {
    sideNav.classList.remove("is-open");
    sideNav.setAttribute("aria-hidden", "true");
    overlay.classList.remove("is-visible");
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");

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
