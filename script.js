// Mortgage Calculator Function
document.querySelector(".calculator form").addEventListener("submit", function(event) {
    event.preventDefault();

    const homePrice = parseFloat(document.getElementById("home-price").value);
    const downPayment = parseFloat(document.getElementById("down-payment").value);
    const interestRate = parseFloat(document.getElementById("interest-rate").value) / 100 / 12; // Monthly interest rate
    const loanTerm = parseFloat(document.getElementById("loan-term").value) * 12; // Total number of months

    // Calculate loan amount
    const loanAmount = homePrice - downPayment;

    // Monthly mortgage payment formula
    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow((1 + interestRate), -loanTerm));

    // Display the result
    if (!isNaN(monthlyPayment) && monthlyPayment !== Infinity) {
        alert(`Estimated Monthly Payment: $${monthlyPayment.toFixed(2)}`);
    } else {
        alert("Please enter valid input values.");
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
