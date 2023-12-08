function submitForm() {
    var userName = document.getElementById("name").value;
    var userContact = document.getElementById("contact").value;
    var userMessage = document.getElementById("message").value;

    if (userName && userContact && userMessage) {
        var userChoice = confirm("You can call us directly by pressing OK or write a message by pressing Cancel.");

        if (userChoice) {
            window.location.href = 'tel:1234567890';
        } else {
            alert("Thank you, " + userName + "! We will get back to you soon. For urgent matters, please call us.");
            document.getElementById("helplineForm").reset();
        }
    } else {
        alert("Please fill in all the required fields before submitting.");
    }
}