function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Project scroll functionality
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Fonction d'envoi d'email avec EmailJS
  function sendEmail(event) {
    event.preventDefault();
  
    const userName = document.getElementById("user_name").value;
    const userEmail = document.getElementById("user_email").value;
    const userMessage = document.getElementById("user_message").value;
  
    const templateParams = {
      name: userName,
      email: userEmail,
      message: userMessage,
      time: new Date().toLocaleString() // si tu veux inclure la date
    };
    
  
    emailjs.send("service_bguqi3i", "template_hxo9bgf", templateParams)

      .then(function(response) {
        document.getElementById("form-status").innerHTML = "✅ Message envoyé avec succès !";
        document.getElementById("contact-form").reset();
      }, function(error) {
        console.error("Erreur EmailJS :", error);
        document.getElementById("form-status").innerHTML = "❌ Échec de l'envoi, réessayez.";
      });
  }
  
  