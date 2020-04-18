// Destructuring properties off of the window.location
const { hash } = window.location;

const message = atob(hash.replace('#', ''));

if (message) {
    // Toggling on/off the hide class from the appropriate divs
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event => {
    //preventing the default browser behaviour from submitting the form to a backend server
    event.preventDefault();

    // toggling them on and off when clicking submit button
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    // Collecting the input of the user
    const input = document.querySelector('#message-input');
    // encrypting the secret message using function btoa()
    const encrypted = btoa(input.value);

    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
});