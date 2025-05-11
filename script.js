// Smooth scrolling when clicking on nav links

// Typing effect
const text = "KANHAIYA KUMAR";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150); // Adjust speed here
    }
}
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".progress").forEach(bar => {
        bar.style.width = bar.classList.contains("html") ? "90%" :
                         bar.classList.contains("css") ? "50%" : "0%";
    });
});
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {
    scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
};

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


document.addEventListener("DOMContentLoaded", typeEffect);

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = "1";
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Initial check
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Console log message
console.log("Portfolio Website Loaded!");
