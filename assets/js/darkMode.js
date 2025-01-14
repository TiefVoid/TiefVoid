const toggle = document.getElementById("toggle");
const toggleText = document.getElementById("toggle-text");

toggle.addEventListener('click', () => {
    const isDarkMode = toggle.classList.contains('dark');

    if (isDarkMode) {
        toggle.classList.remove('dark');
        toggleText.textContent = 'Light Mode';

        // Change <pre> background for light mode
        document.querySelectorAll('pre').forEach(pre => {
            pre.style.backgroundColor = '#e4e4e4';
        });
    } else {
        toggle.classList.add('dark');
        toggleText.textContent = 'Dark Mode';

        // Change <pre> background for dark mode
        document.querySelectorAll('pre').forEach(pre => {
            pre.style.backgroundColor = '#333';
        });
    }
});
