if (console && console.log) {
    console.log("Lance was here!");
}

// Contact form navigation bar

const contactContainer = document.getElementById("contact-form-container");
const openContact = document.getElementById("open-contact");
const closeContact = document.getElementById("close-contact");

openContact.addEventListener('click', () => {
    contactContainer.classList.add('show');
});

closeContact.addEventListener('click', () => {
    contactContainer.classList.remove('show');
});

// Dropdown Menu

const dropDownContainer = document.querySelector(".dropdown-menu");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener('click', () => {
    const isOpen = dropDownContainer.classList.toggle('show');
    toggleBtn.querySelector('.toggle-icon').classList = isOpen
        ? 'fa-solid fa-xmark toggle-icon'
        : 'fa-solid fa-bars toggle-icon';
});

// Contact Form Dropdown Menu

const openDropContact = document.getElementById("open-drop-contact");

openDropContact.addEventListener('click', () => {
    contactContainer.classList.add('show');
});

// Light-Dark Mode Toggle

const stylesheetLink = document.getElementById("stylesheet");
const lightModeToggle = document.getElementById("lightmode-toggle");
const darkModeToggle = document.getElementById("darkmode-toggle");

const storedMode = localStorage.getItem("preferredMode");

// When sun icon is clicked, it changes to dark-mode, hiding sun and showing moon
lightModeToggle.addEventListener("click", () => {
    stylesheetLink.href = "style-dark.css";
    lightModeToggle.style.display = "none";
    darkModeToggle.style.display = "block";

    localStorage.setItem("preferredMode", "dark");
});

// When sun icon is clicked, it changes to light-mode, hiding moon and showing sun
darkModeToggle.addEventListener("click", () => {
    stylesheetLink.href = "style-light.css";
    lightModeToggle.style.display = "block";
    darkModeToggle.style.display = "none";

    localStorage.setItem("preferredMode", "light");
});

// Contact Form

const contactForm = document.querySelector("#contact-form-container form"),
    statusTxt = contactForm.querySelector(".submit-stage p");

contactForm.onsubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest(); // Create new XML object
    xhr.open("POST", "message.php", true); // Send post request to message.php file
    xhr.onreadystatechange = () => { // Use onreadystatechange instead of onload
        if (xhr.readyState == 4) { // Check the ready state
            if (xhr.status == 200) { // If ajax status = 200
                let response = xhr.responseText; // Use responseText instead of response
                if(response.indexOf("Email and password field is required!") != -1 || response.indexOf("Enter a valid email address!") != -1 || response.indexOf("Sorry, failed to send your message") != -1 )
                    statusTxt.style.color = "red";
                statusTxt.innerText = response;
            } else {
                console.error("Error:", xhr.status, xhr.statusText);
            }
        }
    };
    
    let formData = new FormData(); // Creating new FormData obj. This obj is used to send form data
    xhr.send(formData); // Send form data
};