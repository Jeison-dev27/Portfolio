const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const toggleColors = document.getElementById('toggle-colors')
const rootStyles = document.documentElement.style;
const darkModeSelector = document.body.classList;

toggleTheme.addEventListener("click", () => {
    darkModeSelector.toggle("dark");
    const isDark = darkModeSelector.value === 'dark'

    toggleIcon.src = isDark ? "assets/icons/moon.svg" : "assets/icons/sun.svg"
    toggleText.textContent = isDark ? "Dark Mode" : "Light Mode"
});

toggleColors.addEventListener('click', (e) => {
    rootStyles.setProperty('--primary-color', e.target.dataset.color);
});

const cuantosTengo = (a, b, c, d, e, f, g, h, i, j, k, l, m) => cuantosTengo().length;

console.log(' tiene ' + cuantosTengo() + ' letras')