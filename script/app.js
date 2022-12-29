const clickOnAboutMe = document.querySelector('.abot-me');
const showTextAboutMe = document.querySelector('.about-me-text');
const clickOnMySkills = document.querySelector('.my-skills');
const showTextMySkills = document.querySelector('.skills-text');


clickOnAboutMe.addEventListener('click', () => {
    showTextAboutMe.classList.toggle('active');
})
clickOnMySkills.addEventListener('click', () => {
    showTextMySkills.classList.toggle('active');
})
