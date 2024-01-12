console.log("Lance was here!");

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