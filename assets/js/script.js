document.addEventListener('DOMContentLoaded', function () {
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');
            const icon = btn.querySelector('span');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            btn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
                icon.textContent = menu.classList.contains('hidden') ? 'menu' : 'close';
            });

            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.add('hidden');
                    icon.textContent = 'menu';
                });
            });
        });