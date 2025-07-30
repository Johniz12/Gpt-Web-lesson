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