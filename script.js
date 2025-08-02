const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
//   console.log('Current Section:', current); // 🔥 Debug log

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
    //   console.log('Activating link:', link.getAttribute('href')); // 🔥 Debug log
      link.classList.add('active');
    }
    });
});

const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');

openModal.addEventListener('click', () =>{
    modal.classList.add('show')
})

closeModal.addEventListener('click', () =>{
    modal.classList.remove('show');
});

modal.addEventListener('click', (e) =>{
    if (e.target === modal) {
        modal.classList.remove('show');
    }
})

const contactForm = document.getElementById('contact-form');
const formError = document.getElementById('form-error');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); //Stop form from refreshing the page

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        formError.textContent = `⚠️ Please fill in all fields.`;
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formError.textContent = `⚠️ Please enter a valid email address`;
        return;
    }

    formError.textContent = ''; // Clear errors if all is good
    alert('✅ Message sent successfully!');
    contactForm.reset();
});

const projects = [
    {
        title: "Interactive Landing Page",
        description: "A portfolio landing page built with HTML, CSS, and JS.",
        link: "#",
        category: "web"
    },
    {
        title: "Modal Contact Form",
        description: "A reusable modal component with form validation.",
        link: "#",
        category: "web"
    },
    {
        title: "Click Counter App",
        description: "A simple Windows Forms app (C#) with data persistence.",
        link: "#",
        category: "app"
    }
];

const projectList = document.getElementById('project-list');
const filterButtons = document.querySelectorAll('.filter-buttons button');

function renderProjects(filter) {
    projectList.innerHTML = '';// Clear previous cards

    const filtered = filter ==='all'
        ? projects
        : projects.filter(p => p.category === filter);

    filtered.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a hrer = "${project.link}" target = "_blank">View Project</a>
        `;

        projectList.appendChild(card);
    });
}

// Initial render (show all)
renderProjects('all');

// Add event listener to buttons
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        renderProjects(filter);
    });
});

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  setActiveLink(currentSection);
});

// Scroll to top when clicked
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



function setActiveLink(currentSection) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}
// setActiveLink(currentSection);