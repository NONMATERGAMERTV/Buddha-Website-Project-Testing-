function scrollToSection(event, sectionId) {
    event.preventDefault(); // ป้องกันการกระทำเริ่มต้นของลิงก์
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`Section with id ${sectionId} not found.`);
    }
}

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var headerHeight = document.querySelector('.header').offsetHeight;

    if (window.scrollY > headerHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
