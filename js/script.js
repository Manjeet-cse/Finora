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

  // 2) Home page CTA buttons → signup.html
  const ctaButtons = document.querySelectorAll(
    '.hero .btn-primary, .cta .btn-primary, .cta .btn-lg'
  );

  ctaButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      if (this.closest("form")) return; // अगर form का submit button है तो redirect मत करो
      window.location.href = "signup.html";
    });
  });

  // 3) Contact form validation (simple)
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

  // 4) Signup form validation (password match check)
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

      signupMsg.textContent = "Account created successfully (demo).";
      signupMsg.className = "form-message success";
      signupForm.reset();
    });
  }
});
