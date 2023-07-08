function checkUnlock() {
    const unlocked = Cookies.get('turbine_landing_unlocked');
    document.body.classList.add('pw-protected');
  
    if (unlocked) {
      document.body.classList.add('pw-accepted');
      document.body.classList.remove('pw-protected');
    } else {
      document.body.classList.add('pw-protected');
      document.body.classList.remove('pw-accepted');
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    checkUnlock()
  }, false );
  
  const form = document.getElementById('turbine-landing-protect-form');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var passwordValue = e.target.password.value;
    var passwordKey = e.target.key.value;
  
    if (passwordValue === passwordKey) {
      Cookies.set('turbine_landing_unlocked', e.timeStamp);
      checkUnlock();
    }
  }, false);
  