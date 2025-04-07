window.addEventListener("load", function () {
  setTimeout(() => {
      document.getElementById("preloader").style.opacity = "0";
      
          document.getElementById("preloader").style.display = "none";

          document.querySelectorAll(".animated").forEach(el => {
              el.style.animation = "none";
              void el.offsetWidth;
              el.style.animation = "";
          });

  }, 1000);
});

// scroll system

let currentScroll = window.scrollY;
let targetScroll = window.scrollY;
let scrolling = false;

function smoothScroll() {
  if (!scrolling) return;
  currentScroll += (targetScroll - currentScroll) * 0.1;
  window.scrollTo(0, currentScroll);

  if (Math.abs(targetScroll - currentScroll) > 0.5) {
    requestAnimationFrame(smoothScroll);
  } else {
    scrolling = false;
  }
}

window.addEventListener("wheel", (event) => {
  event.preventDefault();
  targetScroll += event.deltaY;
  targetScroll = Math.max(0, targetScroll);

  if (!scrolling) {
    scrolling = true;
    smoothScroll();
  }
}, { passive: false });

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fadeInRight");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transition =
            "opacity 0.5s ease, transform 0.5s ease, filter 0.5s ease";
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateX(0) scale(1)";
          entry.target.style.filter = "blur(0)";
        } else {
          entry.target.style.transition =
            "opacity 0.4s ease, transform 0.4s ease, filter 0.4s ease";
          entry.target.style.opacity = "0";
          entry.target.style.transform = "translateX(-200px) scale(0.5)";
          entry.target.style.filter = "blur(10px)";
        }
      });
    },
    { threshold: 0.5 }
  );

  elements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fadeUpJs, .opacity, .fadeDawnJs");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.5 }
  );

  elements.forEach((el) => observer.observe(el));
});
