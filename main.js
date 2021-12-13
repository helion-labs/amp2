//import { Auth } from './aws-amplify';

console.log("once")

function myFunction() {
  let email = document.getElementById("uname").value
  console.log(email)
}

const butt = document.getElementById('butt');
butt.addEventListener('click', myFunction);
