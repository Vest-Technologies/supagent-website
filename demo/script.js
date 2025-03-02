document.addEventListener("DOMContentLoaded", () => {
  // Dropdown menu hover functionality
  document.querySelectorAll(".dropdown-menu a.dropdown-toggle").forEach((element) => {
    element.addEventListener("click", function (e) {
      const nextEl = this.nextElementSibling
      if (nextEl && nextEl.classList.contains("submenu")) {
        e.preventDefault()
        e.stopPropagation()

        if (nextEl.style.display == "block") {
          nextEl.style.display = "none"
        } else {
          nextEl.style.display = "block"
        }
      }
    })
  })

  // Animate chat bubbles
  const chatBubbles = document.querySelectorAll(".chat-bubble")
  chatBubbles.forEach((bubble, index) => {
    setTimeout(
      () => {
        bubble.style.opacity = "1"
        bubble.style.transform = "translateY(0)"
      },
      500 * (index + 1),
    )
  })

  // Initialize animation for channel cards
  const channelCards = document.querySelectorAll(".channel-card")
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInUp")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  channelCards.forEach((card) => {
    observer.observe(card)
  })

  // Mobile menu adjustments
  const navbarToggler = document.querySelector(".navbar-toggler")
  const navbarCollapse = document.querySelector(".navbar-collapse")

  if (navbarToggler) {
    navbarToggler.addEventListener("click", () => {
      document.body.classList.toggle("menu-open")
    })
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
        navbarToggler.click()
      }
    }
  })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      if (href !== "#") {
        e.preventDefault()

        const targetElement = document.querySelector(href)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      }
    })
  })
})

