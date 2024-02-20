document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send data to server or handle further actions here...
    alert("Thank you, " + name + ". Your message has been received!");
});
