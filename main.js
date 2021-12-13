import { Auth } from 'aws-amplify';


console.log("once")

function myFunction() {
  console.log("Hre")
  alert("The form was submitted");
}

const form = document.getElementById('form');
form.addEventListener('submit', myFunction);
