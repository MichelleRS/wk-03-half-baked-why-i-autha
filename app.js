// get DOM Elements

import { redirectIfLoggedIn, signInUser, signUpUser } from './fetch-utils.js';

// sign in
const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

// sign up
const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-element');
const signUpPassword = document.getElementById('sign-up-password');

// events
// Connect sign up and sign in forms to supabase

// sign up
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const user = await signUpUser(signUpEmail.value, signUpPassword.value);

    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});

// sign in
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const user = await signInUser(signInEmail.value, signInPassword.value);

    // Redirect to /other-page on successful auth
    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
    // Redirect to /other-page when page loads if user is authenticated
});
