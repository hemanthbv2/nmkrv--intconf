/* ==========================================================================
   International Management Conference 2027 — Client Scripts
   Department of Management, NMKRV College, Bengaluru (RSST)
   Theme: Digital Transformation & Sustainability in Business Management
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ─── 1. Mobile Navigation Toggle ───
  const navToggleBtn = document.getElementById('navToggleBtn');
  const navMenu = document.getElementById('navMenu');

  if (navToggleBtn && navMenu) {
    navToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('open');
      const icon = navToggleBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggleBtn.contains(e.target)) {
        navMenu.classList.remove('open');
        const icon = navToggleBtn.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      }
    });

    // Close menu when clicking link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = navToggleBtn.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // ─── 2. Active Page Tracking ───
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ─── 3. Live Countdown to February 11, 2027 09:00:00 IST ───
  const targetDate = new Date('February 11, 2027 09:00:00 GMT+0530').getTime();
  const dEl = document.getElementById('cdDays');
  const hEl = document.getElementById('cdHours');
  const mEl = document.getElementById('cdMins');
  const sEl = document.getElementById('cdSecs');

  if (dEl && hEl && mEl && sEl) {
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        dEl.innerText = days < 10 ? '0' + days : days;
        hEl.innerText = hours < 10 ? '0' + hours : hours;
        mEl.innerText = minutes < 10 ? '0' + minutes : minutes;
        sEl.innerText = seconds < 10 ? '0' + seconds : seconds;
      }
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();
  }

  // ─── 4. Contact / Inquiry Form Handler ───
  const inquiryForm = document.getElementById('conferenceInquiryForm') || document.getElementById('inquiryForm');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = inquiryForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending Inquiry...';
      submitBtn.disabled = true;

      setTimeout(() => {
        alert('Thank you for contacting the International Management Conference 2027 Secretariat. Our team will get back to you shortly.');
        inquiryForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1000);
    });
  }
});