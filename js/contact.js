// contact form backend to send mails
(function() {
  // edit user id 
  emailjs.init('user_TTDmetQLYgWCLzHTDgqxm');
})();
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate random contact number
      this.contact_number.value = Math.random() * 100000 | 0;
      
      // send form to mail
      emailjs.sendForm('contact_service', 'contact_form', this)
          .then(function() {
              document.getElementById('status').innerHTML="Submitted Successfully..";
              document.getElementById('contact-form').reset();
          }, function(error) {
              console.log('FAILED', error);
              document.getElementById('status').innerHTML="Submission Failed! Try Again.";
              document.getElementById('contact-form').reset();
          });
  });
}