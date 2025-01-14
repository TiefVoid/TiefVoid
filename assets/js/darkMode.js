const toggle = document.getElementById("toggle");
const navBar = document.querySelector(".nav-bars");
const popups = document.querySelectorAll(".white-popup"); // Select all popups

toggle.addEventListener('click', () => {
    const isDarkMode = !toggle.classList.contains('light');

    if (isDarkMode) {
        toggle.classList.add('light');

        document.body.style.backgroundColor = '#e4e4e4';
        document.body.style.color = '#333';
        navBar.style.filter = 'invert(22%) sepia(0%) saturate(33%) hue-rotate(210deg) brightness(86%) contrast(96%)';
        popups.forEach(popup => popup.classList.add('light-mode'));
    } else {
        toggle.classList.remove('light');

        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
        navBar.style.filter = 'invert(100%) sepia(0%) saturate(0%) hue-rotate(258deg) brightness(107%) contrast(105%)';
        popups.forEach(popup => popup.classList.remove('light-mode'));
    }
});
