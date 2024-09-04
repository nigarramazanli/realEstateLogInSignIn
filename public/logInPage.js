document.addEventListener("DOMContentLoaded", function() {
    const usernameErrorMessageLogIn = document.getElementById('usernameErrorMessageLogIn');
    const emailErrorMessageLogIn = document.getElementById('emailErrorMessageLogIn');
    const passwordErrorMessageLogIn = document.getElementById('passwordErrorMessageLogIn');
    const username_inputLogIn = document.getElementById('username_inputLogIn');
    const email_inputLogIn = document.getElementById('email_inputLogIn');
    const parol_inputLogIn = document.getElementById('parol_inputLogIn');

    const counters = [
        { element: document.querySelector(".counter-container1 h2"), target: 53341 },
        { element: document.querySelector(".counter-container2 h2"), target: 16 },
        { element: document.querySelector(".counter-container3 h2"), target: 10 }
    ];
    const duration = 2000; // Duration in milliseconds
    const startTime = performance.now();

    function updateCounters(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);



    counters.forEach(({ element, target }) => {
        const currentNumber = Math.floor(progress * target);
        element.textContent = currentNumber;
    });



        
        if (progress < 1) {
            requestAnimationFrame(updateCounters);
        }
    }

    requestAnimationFrame(updateCounters);

    const logInForm = document.getElementById('logInForm');
    const logInSubmitButton = document.getElementById('logInSubmitButton');
    const errorMessagesLogIn =[
        {nameErrorMessage:'usernameErrorMessageLogIn', nameInputLogIn:'username_inputLogIn'},
        {nameErrorMessage:'emailErrorMessageLogIn', nameInputLogIn:'email_inputLogIn'},
        {nameErrorMessage:'passwordErrorMessageLogIn', nameInputLogIn:'parol_inputLogIn'}
    ]
    logInSubmitButton.addEventListener('click', async function(event) {
        event.preventDefault();
        errorMessagesLogIn.forEach(errorMessageLogin => {
            const messageErrorLogIn= document.getElementById(errorMessageLogin.nameErrorMessage);
            const inputLogIn = document.getElementById(errorMessageLogin.nameInputLogIn);
            if(inputLogIn.value===''){
                 
                messageErrorLogIn.textContent='Buranı doldurun';

            }
            else{

                messageErrorLogIn.textContent='';

            }
            inputLogIn.addEventListener('input',()=>{
                if(inputLogIn.value!==''){
                    messageErrorLogIn.textContent='';

                }
            })
        })

        const obj = {
            username: username_inputLogIn.value,
            email: email_inputLogIn.value,
            password: parol_inputLogIn.value
        };

        try {
            const response = await axios.post('http://192.168.0.105:3000/users', obj, {
                headers: { "Content-Type": "application/json" }
            });
            console.log(response.data);
        } catch (error) {
            console.error("Xəta baş verdi:", error);
        }

        logInForm.reset();
    });
});