import { Auth } from 'aws-amplify';

function myFunction() {
    alert("The form was submitted");
}

const form = document.getElementById('form');
form.addEventListener('submit', myFunction);
