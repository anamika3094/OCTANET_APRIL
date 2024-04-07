document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.login-btn');
    const signinBtn = document.querySelector('.signin-btn');
    const loginForm = document.querySelector('.login-form');
    const signinForm = document.querySelector('.signin-form');
    const switchToSigninBtn = document.querySelector('.switch-to-signin');
    const switchToLoginBtn = document.querySelector('.switch-to-login');

    loginBtn.addEventListener('click', function() {
        showForm(loginForm);
        hideForm(signinForm);
    });

    signinBtn.addEventListener('click', function() {
        showForm(signinForm);
        hideForm(loginForm);
    });

    switchToSigninBtn.addEventListener('click', function() {
        showForm(signinForm);
        hideForm(loginForm);
    });

    switchToLoginBtn.addEventListener('click', function() {
        showForm(loginForm);
        hideForm(signinForm);
    });

    function showForm(form) {
        form.classList.remove('hidden');
    }

    function hideForm(form) {
        form.classList.add('hidden');
    }
});
