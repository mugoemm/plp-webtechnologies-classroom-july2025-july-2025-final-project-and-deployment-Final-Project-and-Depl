document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const message = document.getElementById("confirmationMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const product = document.getElementById("product").value;
      const quantity = document.getElementById("quantity").value;
      const phone = document.getElementById("phone").value;

      if (name && product && quantity && phone) {
        message.textContent = `Thank you ${name}! Your order of ${quantity} Kg ${product} has been received. We'll contact you at ${phone}.`;
        message.style.color = "green";
        form.reset();
      } else {
        message.textContent = "Please fill out all fields.";
        message.style.color = "red";
      }
    });
  }
});

