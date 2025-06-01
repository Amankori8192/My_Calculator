const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
            button.addEventListener('click', () => {
                if (button.textContent === 'AC') {
                    result.textContent = '';
                } else if (button.textContent === '=') {
                    try {
                        result.textContent = eval(result.textContent);
                    } catch {
                        result.textContent = 'Error';
                    }
                } else if (button.textContent === '←') {
                    result.textContent = result.textContent.slice(0, -1);
                } else {
                    result.textContent += button.textContent;
                }
            });
        });