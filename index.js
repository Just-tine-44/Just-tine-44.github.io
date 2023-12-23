document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.parentElement.addEventListener('mouseenter', () => {
            dropdown.style.display = 'block';
        });

        dropdown.parentElement.addEventListener('mouseleave', () => {
            dropdown.style.display = 'none';
        });
    });
});