// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Projects Section
const toggleProjectsButton = document.getElementById('toggle-projects');
const projectList = document.getElementById('project-list');

toggleProjectsButton.addEventListener('click', function () {
    projectList.classList.toggle('hidden');
});

// Form Validation and Submission
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        formMessage.textContent = `Thank you, ${name}. We'll get in touch with you soon.`;
        formMessage.classList.remove('hidden');
        contactForm.reset();
    }
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
});

backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
