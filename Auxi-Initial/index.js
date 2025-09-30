document.addEventListener("DOMContentLoaded", () => {

  const heroText = document.querySelector(".front-tagline");
  if (heroText) {
    heroText.style.opacity = 0;
    heroText.style.transition = "opacity 1.5s ease-in-out";
    setTimeout(() => {
      heroText.style.opacity = 1;
    }, 100);
  }

  
  const signUpBtn = document.querySelector(".sign-up-button");
  const logInBtn = document.querySelector(".log-in-button");

  if (signUpBtn) {
    signUpBtn.addEventListener("click", () => {
      window.location.href = "./signup.html";
    });
  }

  if (logInBtn) {
    logInBtn.addEventListener("click", () => {
      window.location.href = "./login.html";
    });
  }


  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const target = link.getAttribute("href");
      if (target.startsWith("#")) {
        e.preventDefault();
        document.querySelector(target).scrollIntoView({ behavior: "smooth" });
      } else {

        e.preventDefault();
        window.location.href = target;
      }
    });
  });

  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector(".nav");
  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  const shopItems = document.querySelectorAll(".shop-item");
  shopItems.forEach(item => {
    item.addEventListener("click", () => {
      alert(`You clicked on ${item.dataset.name || "an item"}`);
    });
  });

  const signupForm = document.querySelector("#signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      const email = signupForm.querySelector("#email").value;
      if (!email.includes("@")) {
        e.preventDefault();
        alert("Please enter a valid email!");
      }
    });
  }
});

