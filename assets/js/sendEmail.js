function sendEmail(e, data, callback) {
  e.preventDefault();
  var form = document.getElementById(data.formId);
  var submitButton = document.getElementById(data.submitButtonId);

  // HTML BODY
  var htmlBody = '<h1>Upstream Coding</h1> <h3>Information:</h3>';

  if (form.moreInfo) {
    htmlBody += '<p>' + form.moreInfo.value + '</p> <hr />';
  }

  htmlBody += '<ul>'

  if (form.company) {
    htmlBody += '<li>Company: ' + form.company.value + '</li>';
  }

  if (form.name) {
    htmlBody += '<li>Name: ' + form.name.value + '</li>';
  }

  if (form.email) {
    htmlBody += '<li>Email: ' + form.email.value + '</li>';
  }

  if (form.phone) {
    htmlBody +=  '<li>Phone: ' + form.phone.value + '</li>';
  }

  // HIRING
  if (form.github_username) {
    htmlBody +=  '<li>Github: ' + form.github_username.value + '</li>';
  }

  if (form.linkedin) {
    htmlBody +=  '<li>LinkedIn: ' + form.linkedin.value + '</li>';
  }

  if (form.position) {
    htmlBody +=  '<li>Position: ' + form.position.value + '</li>';
  }

  if (form.skills) {
    htmlBody +=  '<li>Skills: ' + form.skills.value + '</li>';
  }
  // /HIRING

  htmlBody += '</ul>'

  htmlBody += '<p>Sent from: ' + document.location.href + '</p> <hr />';

  var emailParts = {
    to: 'hello@usptreamcoding.com',
    from: {
      name: 'upstreamcoding.com'
    },
    replyTo: form.email.value,
    bcc: 'sean@upstreamcoding.com, alan@upstreamcoding.com',
    subject: data.subject,
    body: '',
    htmlBody
  }

  var body = JSON.stringify(emailParts);
  var TURBINE_API_BASE_URL = 'https://api.turbinelms.com';
  var endpoint = '/v1/external/gmail/send';

  fetch(TURBINE_API_BASE_URL + endpoint, {
    method: 'POST',
    body
  });

  submitButton.disabled = true;

  setTimeout(function() {
    toastr.success(data.successMessage || 'Message sent!');
    form.reset();
    submitButton.disabled = false;

    if (data.modalId) {
      $('#' + data.modalId).modal('hide');
    }

    if (callback && typeof callback === 'function') {
      callback();
    }
  }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
  // Become Partner
  var formBecomePartner = document.getElementById('form-becomePartner');

  if (formBecomePartner) {
    formBecomePartner.addEventListener('submit', (event) => {
      sendEmail(event, {
        subject: 'Become a Partner',
        formId: 'form-becomePartner',
        submitButtonId: 'submit-becomePartner',
        modalId: 'modal-becomePartner'
      });
    });
  }

  // Connect with Advisor
  var formConnectWithAdvisor = document.getElementById('form-connectWithAdvisor');

  if (formConnectWithAdvisor) {
    formConnectWithAdvisor.addEventListener('submit', (event) => {
      sendEmail(event, {
        subject: 'Connect with Advisor',
        formId: 'form-connectWithAdvisor',
        submitButtonId: 'submit-connectWithAdvisor',
        modalId: 'modal-connectWithAdvisor'
      });
    });
  }

  // Robomatter
  var formRobomatter = document.getElementById('form-robomatter');

  if (formRobomatter) {
    formRobomatter.addEventListener('submit', (event) => {
      sendEmail(event, {
        subject: 'Robomatter Learn More',
        formId: 'form-robomatter',
        submitButtonId: 'submit-robomatter',
        modalId: 'modal-robomatter'
      });
    });
  }

  // Hiring
  var formHiring = document.getElementById('form-hiring');
  var instructorExperience = document.getElementById('position-instructor-experience');

  if (formHiring) {
    formHiring.addEventListener('submit', (event) => {
      sendEmail(event, {
        subject: "We're Hiring : Candidate Submission",
        formId: 'form-hiring',
        submitButtonId: 'submit-hiring',
        successMessage: 'Application received! A team member will contact you soon.'
      }, function() {
        instructorExperience.style.display = 'none';
      });
    });
  }

}, false);
