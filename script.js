document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.querySelector('.profile-img');
    profileImage.style.opacity = 0;
    setTimeout(() => {
        profileImage.style.transition = 'opacity 1s';
        profileImage.style.opacity = 1;
    }, 100);

    // Add fade-in effect to sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.opacity = 0;
        setTimeout(() => {
            section.style.transition = 'opacity
