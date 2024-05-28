        const buttons = document.querySelectorAll('button');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const p = button.nextElementSibling;

                if (p.classList.contains('hidden')) {
                    p.classList.remove('hidden');
                    button.textContent = 'Close tab';
                } else {
                    p.classList.add('hidden');
                    button.textContent = 'Open tab';
                }
            });
        });
