const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.boxShadow =
        "0 20px 50px rgba(0,0,0,.2)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.1)";
    });

});

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Thank you for your order! We will contact you shortly.");
    });
});