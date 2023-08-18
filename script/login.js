// Step-1: Add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // Step-2: Get the Email Address
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // Step-3: Get the Password
    const passwordFild = document.getElementById('user-password');
    const password = passwordFild.value;

    // DANGER: Do Not Verify email password on the client side
    // step-4: varify email and password
    if(email === 'sontan@baap.com' && password === 'secret'){
        console.log("Valid User");
    }
    else{
        console.log('Invalid User');
    }
})