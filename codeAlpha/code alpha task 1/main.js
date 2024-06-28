document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button, .clear, .equal');
    const screen = document.querySelector('.screen');
    let screenContent = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (button.classList.contains('clear')) {
                screenContent = '';
            } else if (button.classList.contains('equal')) {
                try {
                    screenContent = eval(screenContent.replace('×', '*').replace('÷', '/'));
                } catch {
                    screenContent = 'Error';
                }
            } else if (value === '←') {
                screenContent = screenContent.slice(0, -1);
            } else {
                screenContent += value;
            }

            screen.textContent = screenContent || '0';
        });
    });
});
