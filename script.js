document.addEventListener('DOMContentLoaded', function() {
  const billInput = document.getElementById("bill");
  const tipInput = document.getElementById("tip");
  const totalSpan = document.getElementById("total");
  const calculateBtn = document.getElementById("calculate");
  const tipButtons = document.querySelectorAll(".tip-btn");

  // Add event listeners to tip buttons
  tipButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tipValue = this.getAttribute('data-tip');
      setTip(tipValue);
    });
  });

  function setTip(value) {
    tipInput.value = value;
  }

  function calculateTotal() {
    const billValue = parseFloat(billInput.value);
    const tipValue = parseFloat(tipInput.value);

    if (isNaN(billValue) || billValue <= 0) {
      totalSpan.innerText = "Please enter a valid bill amount.";
      return;
    }

    if (isNaN(tipValue) || tipValue < 0) {
      totalSpan.innerText = "Please enter a valid tip percentage.";
      return;
    }

    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = `Total: $${totalValue.toFixed(2)}`;
  }

  calculateBtn.addEventListener("click", calculateTotal);
  
  // Allow pressing Enter to calculate
  billInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      calculateTotal();
    }
  });
  
  tipInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      calculateTotal();
    }
  });
});
