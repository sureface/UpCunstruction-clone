
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
})


const dropdownOpen = document.querySelector(".navbar-menu");

document.querySelector(".nav-bars").addEventListener("click", (e) => {
    dropdownOpen.classList.toggle("open")
})
document.querySelector(".nav-close").addEventListener("click", (e) => {
    dropdownOpen.classList.toggle("open")
})

document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const botToken = "7071972318:AAGF1ftKjvu08o2NR4Xga9UZPRa6UOpZFoI";
    const chatId = "5951067245";

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const message = document.getElementById("message").value;
    
    const text = `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`;
    
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const params = {
        chat_id: chatId,
        text: text,
    }

    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
    .then(response => response.json())
    .then(res => {
        if(res.ok) {
            alert("Message Sent Successfully !!!");
            document.getElementById("myForm").reset();
        } else {
            alert("Error Sending Message...!?")
        }
    })
    .catch(error => alert("Error Sending Message...!? " + error.message))
})