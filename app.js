const toggleMenuElement = document.getElementById('js-toggle-menu');
const menuElement = document.getElementById('js-menu');
const privacyPolicy = document.getElementById('privacy-policy');
const privacyPolicyBox = document.getElementById('privacy-policy-box');
const year = new Date().getFullYear();

document.getElementById('year').innerHTML = year;

if (document.cookie.split('privacy=')[1] !== "true") {
    privacyPolicyBox.style.display = "flex";
}

toggleMenuElement.addEventListener('click', function () {
    menuElement.classList.toggle('visible');
    toggleMenuElement.classList.toggle('mdi-menu');
    toggleMenuElement.classList.toggle('mdi-close');
});

privacyPolicy.addEventListener('click', () => {
    document.cookie = "privacy=true; SameSite=None; Secure";
    privacyPolicyBox.style.display = "none";
})

const breakpoint = window.matchMedia('(min-width: 768px)');
breakpoint.addEventListener('change', function (event) {
    if (event.matches) {
        menuElement.classList.remove('visible');
    }
});