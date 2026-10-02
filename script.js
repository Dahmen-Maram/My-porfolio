// Mobile menu
function toggleMenu() {
  document.querySelector(".menu-links").classList.toggle("open");
  document.querySelector(".hamburger-icon").classList.toggle("open");
}

// Header background once the page is scrolled
const header = document.getElementById("site-header");
function onScroll() {
  header.classList.toggle("scrolled", window.scrollY > 10);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Reveal elements as they enter the viewport
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el, i) => {
    // small stagger for items in the same grid
    el.style.transitionDelay = `${(i % 6) * 60}ms`;
    revealObserver.observe(el);
  });
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

// Highlight the nav link of the section in view
const navLinks = document.querySelectorAll(".nav-links a");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
document.querySelectorAll("main section[id]").forEach((s) => sectionObserver.observe(s));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Send email with EmailJS
function sendEmail(event) {
  event.preventDefault();

  const status = document.getElementById("form-status");
  const templateParams = {
    name: document.getElementById("user_name").value,
    email: document.getElementById("user_email").value,
    message: document.getElementById("user_message").value,
    time: new Date().toLocaleString(),
  };

  status.textContent = "Sending…";
  status.style.color = "";

  emailjs.send("service_bguqi3i", "template_hxo9bgf", templateParams).then(
    function () {
      status.textContent = "✅ Message sent successfully! I'll get back to you soon.";
      status.style.color = "#15803d";
      document.getElementById("contact-form").reset();
    },
    function (error) {
      console.error("EmailJS error:", error);
      status.textContent = "❌ Failed to send, please try again.";
      status.style.color = "#b91c1c";
    }
  );
}
