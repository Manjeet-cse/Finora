document.addEventListener("DOMContentLoaded", function () {
  // 1) Navbar: active link by current page
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });

  // Contact form validation 
  const contactForm = document.getElementById("contactForm");
  const contactMsg = document.getElementById("formMessage");

  if (contactForm && contactMsg) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (name === "" || email === "" || message === "") {
        contactMsg.textContent = "Please fill all required fields.";
        contactMsg.className = "form-message error";
        return;
      }

      contactMsg.textContent = "Thank you! Your message has been sent.";
      contactMsg.className = "form-message success";
      contactForm.reset();
    });
  }

  // Signup form validation
  const signupForm = document.getElementById("signupForm");
  const signupMsg = document.getElementById("formMessage");

  if (signupForm && signupMsg) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const password = signupForm.password.value;
      const confirmPassword = signupForm.confirmPassword.value;

      if (password !== confirmPassword) {
        signupMsg.textContent = "Passwords do not match.";
        signupMsg.className = "form-message error";
        return;
      }

      signupMsg.textContent = "Account created successfully ";
      signupMsg.className = "form-message success";
      signupForm.reset();
    });
  }
});
  // Sign-in form simple validation
  const signinForm = document.getElementById("signinForm");
  const signinMsg = document.getElementById("signinMessage");

  if (signinForm && signinMsg) {
    signinForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = signinForm.signinEmail.value.trim();
      const password = signinForm.signinPassword.value.trim();

      if (email === "" || password === "") {
        signinMsg.textContent = "Please enter both email and password.";
        signinMsg.className = "form-message error";
        return;
      }

      if (password.length < 8) {
        signinMsg.textContent = "Password must be at least 8 characters.";
        signinMsg.className = "form-message error";
        return;
      }

      signinMsg.textContent = "Sign in successful Welcome to finora";
      signinMsg.className = "form-message success";

      setTimeout(function () {
        window.location.href = "index.html";
      }, 2000);
    });
  }

    // Dark / Light theme toggle
  const themeToggleBtn = document.getElementById("themeToggle");

  if (themeToggleBtn) {
    // Load saved theme
    const savedTheme = localStorage.getItem("finora-theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      themeToggleBtn.textContent = "Light Mode";
    }

    themeToggleBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      const isDark = document.body.classList.contains("dark-mode");
      themeToggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";

      // Save preference
      localStorage.setItem("finora-theme", isDark ? "dark" : "light");
    });
  }

