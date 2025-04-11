let cartCount = 0;

const buttons = document.querySelectorAll(".add-to-cart");
const countDisplay = document.getElementById("cart-count");

buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        cartCount++;
        countDisplay.textContent = cartCount;
        showToast();
    });
});

function showToast() {
    const toastEl = document.getElementById('cartToast');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  }
