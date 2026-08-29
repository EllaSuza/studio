const cNavWrap = document.getElementById("cNavWrap");
const h1 = document.querySelector("h1");
const navItems = document.querySelectorAll("[data-nav]");

// Add H1 as the first navigation item
const h1Span = document.createElement("span");
h1Span.textContent = h1.textContent;
cNavWrap.appendChild(h1Span);

// Add data-nav items
navItems.forEach(item => {
    const span = document.createElement("span");
    span.textContent = item.dataset.nav;
    cNavWrap.appendChild(span);
});












const navElements = [
    document.querySelector("h1"),
    ...document.querySelectorAll("[data-nav]")
];

const navSpans = document.querySelectorAll("#cNavWrap span");

const visibleElements = new Set();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            visibleElements.add(entry.target);
        } else {
            visibleElements.delete(entry.target);
        }
    });

    updateActive();
}, {
    threshold: 0
});

navElements.forEach(element => observer.observe(element));

function updateActive() {
    if (visibleElements.size === 0) return;

    let closestElement = null;
    let closestDistance = Infinity;

    visibleElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestElement = element;
        }
    });

    const index = navElements.indexOf(closestElement);

    navSpans.forEach(span => span.classList.remove("active"));

    if (index !== -1) {
        navSpans[index].classList.add("active");
    }
}

window.addEventListener("scroll", updateActive, { passive: true });

updateActive();






navSpans.forEach((span, index) => {
    span.addEventListener("click", () => {
        navElements[index].scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});