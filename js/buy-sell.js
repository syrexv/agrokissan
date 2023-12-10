// Function to handle form submission (simulated backend processing)
document.getElementById("productPhoto").addEventListener('change', function (event) {
    var productDisplay = document.getElementById('productDisplay');
    productDisplay.src = URL.createObjectURL(event.target.files[0]);
});

document.getElementById('productPrice').addEventListener('input', function () {
    var priceDisplay = document.getElementById('priceDisplay');
    priceDisplay.textContent = 'Price $:' + this.value;
});

document.getElementById('productWeight').addEventListener('input', function () {
    var priceDisplay = document.getElementById('WeightDisplay');
    priceDisplay.textContent = 'Wight kg: ' + this.value;
});

document.getElementById('productPrice').addEventListener('input', function () {
    var priceDisplay = document.getElementById('priceDisplay');
    priceDisplay.textContent = 'Price: $' + this.value;
});

function handleFormSubmission(event) {
    event.preventDefault();
    
    // Simulate backend processing (replace with actual backend communication)
    alert('Product uploaded successfully!');
}

// Add event listener to the form
document.querySelector('form').addEventListener('submit', handleFormSubmission);

// Function to handle buy button click
function handleBuyButtonClick(productName, productPrice) {
    // Simulate buying action (replace with actual purchase logic)
    alert(`You have added ${productName} to your cart. Total Price: $${productPrice}`);
}

// Add event listeners to buy buttons

document.getElementsByName("infobox")[0].style.display="none";
document.getElementsByName("infobox")[1].style.display="none";

function showInfoBox() {
    var infoBox = document.getElementsByName("infobox");
    infoBox.forEach(element => {
        element.style.display = "block";
    });
    
}

