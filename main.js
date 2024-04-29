const greetBtn = document.getElementById('greetBtn');
const userName = document.getElementById('userName');
const greeting = document.getElementById('greeting');
const error = document.getElementById('error');

    greetBtn.addEventListener('click', function () {
            const name = userName.value.trim();

            if (name === '') {
                error.textContent = 'Please enter your name.';
                greeting.textContent = ''; 
                return;
            }

            error.textContent = ''; 

            greeting.textContent = `Hello, ${name}!`;
            greeting.style.display = 'block';
            setTimeout(() => {
                greeting.style.opacity = '1';
            }, 100);

        
    });