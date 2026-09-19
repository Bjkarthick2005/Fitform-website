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

// Franchise Form Success Message

const franchiseForm = document.getElementById("franchiseForm");
const successMessage = document.getElementById("successMessage");

if (franchiseForm) {
    franchiseForm.addEventListener("submit", function () {

        if (successMessage) {
            successMessage.style.display = "none";
        }

        setTimeout(function () {

            if (successMessage) {
                successMessage.style.display = "block";
            }

            franchiseForm.reset();

        }, 1500);
    });
}


// =========================
// FRANCHISE FORM
// =========================
// Form submission is handled by
// Google Apps Script through the
// HTML form action.
// No fetch() is required here.
