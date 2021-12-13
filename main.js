//import { Auth } from './aws-amplify';


console.log("once")

function myFunction() {
  let email = document.getElementById("uname").value
  console.log(email)
}

const form = document.getElementById('form');
form.addEventListener('submit', myFunction);
