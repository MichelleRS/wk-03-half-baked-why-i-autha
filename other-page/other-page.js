// use checkAuth function to redirect is user not authenticated
import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();

// DOM Elements
const logOutButton = document.getElementById('logout');

// add event listener to the logout button and call logout
logOutButton.addEventListener('click', async () => {
    await logout();
});
