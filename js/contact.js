// contact form backend to send mails
(function () {
  // edit user id 
  emailjs.init('user_TTDmetQLYgWCLzHTDgqxm');
})();
window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const url = 'https://coders-evoke-contactus.herokuapp.com/api/submisson/create'
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        user: document.getElementById('name').value,
        submission_description: document.getElementById('message').value,
        email: document.getElementById('email').value,
      })
    }).then(
      response => response.text() // .json(), etc.
      // same as function(response) {return response.text();}
    ).then(
      html => console.log(html)
    );



    // generate random contact number
    this.contact_number.value = Math.random() * 100000 | 0;

    // // send form to mail
    emailjs.sendForm('contact_service', 'contact_form', this)
      .then(function () {
        document.getElementById('status').innerHTML = "Submitted Successfully..";
        document.getElementById('contact-form').reset();
      }, function (error) {
        console.log('FAILED', error);
        document.getElementById('status').innerHTML = "Submission Failed! Try Again.";
        document.getElementById('contact-form').reset();
      });
  });
}