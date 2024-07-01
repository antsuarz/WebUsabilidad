document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('toggle-menu');
    const nav = document.querySelector('header nav');

    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
    });

    if (window.innerWidth > 600) {
        toggleButton.style.display = 'none';
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 600) {
            nav.classList.remove('show-menu');
            toggleButton.style.display = 'none';
        } else {
            toggleButton.style.display = 'block';
        }
    });
});
