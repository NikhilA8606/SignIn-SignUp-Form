const signInButton = document.querySelector('#signInButton');
const signUpButton = document.querySelector('#signUpButton');
const overlayContainer = document.querySelector('.container .overlay-container');
const overlay = document.querySelector('.container .overlay-container .overlay');

signInButton.addEventListener('click', () => {
    overlayContainer.style.transform = 'translateX(100%)';
    overlay.style.transform = 'translateX(-50%)';
});
signUpButton.addEventListener('click', () => {
    overlayContainer.style.transform = 'translateX(0)';
    overlay.style.transform = 'translateX(0)';
});