document.getElementById("register-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const errorDiv = document.getElementById("error-message");
    const successDiv = document.getElementById("success-message");
    errorDiv.textContent = "";
    successDiv.style.display = "none";

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const contact = document.getElementById("contact").value;

    if (!firstName || !lastName || !lastName || !dob || !address || !contact || !email) {
        errorDiv.textContent = "All fields are mandatory";
        return;
    }

    const minDate = new Date('1924-01-01');
    const selectedDate = new Date(dob);
    if (selectedDate <= minDate) {
        errorDiv.textContent = "Choose a date greater than 1/1/1924";
        return;
    }

    if (!/^\d{10}$/.test(contact)) {
        errorDiv.textContent = "Enter a valid 10-digit contact number";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorDiv.textContent = "Enter a valid email id";
        return;
    }

    const passengerId = Math.floor(10000 + Math.random() * 90000);
    const password = firstName.slice(0, 4) + "@123";

    successDiv.textContent = `Passenger Registration is successful. Your ID: ${passengerId}, Password: ${password}`;
    successDiv.style.display = "block";
    document.getElementById("register-form").reset();
});

document.getElementById("reset-btn").addEventListener("click", function() {
    if (confirm("Is it Okay to reset the fields?")) {
        document.getElementById("register-form").reset();
        document.getElementById("error-message").textContent = "";
        document.getElementById("success-message").style.display = "none";
    }
});