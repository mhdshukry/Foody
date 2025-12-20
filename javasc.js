document.addEventListener("DOMContentLoaded", () => {
  const heroSwiper = new Swiper(".hero-slider", {
    loop: true,
    effect: "fade",
    speed: 900,
    autoplay: {
      delay: 4200,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".hero-slider .swiper-pagination",
      clickable: true,
    },
  });

  const testimonialSwiper = new Swiper(".testimonial-slider", {
    loop: true,
    spaceBetween: 24,
    speed: 5200,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      reverseDirection: true,
    },
    allowTouchMove: false,
    pagination: {
      el: ".testimonial-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 2,
      },
    },
  });

  const navToggle = document.querySelector("[data-nav-toggle]");
  const navigation = document.querySelector("[data-navigation]");
  const navLinks = navigation ? navigation.querySelectorAll(".nav-link") : [];
  const navIcon = navToggle ? navToggle.querySelector("i") : null;
  const header = document.getElementById("site-header");

  const updateNavIcon = (isOpen) => {
    if (!navToggle || !navIcon) {
      return;
    }
    navToggle.classList.toggle("is-active", isOpen);
    navIcon.classList.toggle("fa-bars", !isOpen);
    navIcon.classList.toggle("fa-xmark", isOpen);
  };

  const setScrollLock = (isLocked) => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (isLocked && scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      if (header) {
        header.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.paddingRight = "";
      if (header) {
        header.style.paddingRight = "";
      }
    }
  };

  const applyNavState = (isOpen) => {
    if (navigation) {
      navigation.classList.toggle("is-open", isOpen);
    }
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", String(isOpen));
    }
    document.body.classList.toggle("nav-open", isOpen);
    updateNavIcon(isOpen);
    setScrollLock(isOpen);
  };

  const closeNav = () => {
    applyNavState(false);
  };

  if (navToggle && navigation) {
    navToggle.addEventListener("click", () => {
      const isOpen = !navigation.classList.contains("is-open");
      applyNavState(isOpen);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeNav();
      });
    });
  }

  document.addEventListener("click", (event) => {
    if (!navigation) {
      return;
    }
    const target = event.target;
    const navIsOpen = navigation.classList.contains("is-open");
    if (!navIsOpen) {
      return;
    }
    if (
      target instanceof HTMLElement &&
      !navigation.contains(target) &&
      (!navToggle || !navToggle.contains(target))
    ) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });

  const desktopMediaQuery = window.matchMedia("(min-width: 992px)");
  const handleViewportChange = (event) => {
    if (event.matches) {
      closeNav();
    }
  };
  if (typeof desktopMediaQuery.addEventListener === "function") {
    desktopMediaQuery.addEventListener("change", handleViewportChange);
  } else if (typeof desktopMediaQuery.addListener === "function") {
    desktopMediaQuery.addListener(handleViewportChange);
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!header) {
        return;
      }
      const shouldHighlight = window.scrollY > 10;
      header.classList.toggle("is-scrolled", shouldHighlight);
    },
    { passive: true }
  );

  const currentYearEl = document.getElementById("current-year");
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear().toString();
  }
});
