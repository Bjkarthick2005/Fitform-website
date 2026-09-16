// =========================
// FITFORM INDUSTRIES
// MAIN JAVASCRIPT
// =========================


// =========================
// BACK TO TOP BUTTON
// =========================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    // Show / hide Back to Top button
    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });


    // Scroll smoothly to the top
    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// =========================
// FRANCHISE FORM
// =========================
// Form submission is handled by
// Google Apps Script through the
// HTML form action.
// No fetch() is required here.