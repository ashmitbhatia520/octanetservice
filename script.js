// Function to scroll smoothly to a section
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
};

// Form submission
const handleSubmit = (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Message sent successfully!');
        clearForm();
    } else {
        alert('Please fill out all fields.');
    }
};

// Clear the form
const clearForm = () => {
    document.getElementById('contactForm').reset();
};

document.getElementById('contactForm').addEventListener('submit', handleSubmit);
