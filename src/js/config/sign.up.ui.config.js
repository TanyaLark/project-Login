export function registrationUI() {
  const signUpUI = {
    signUpCardBody: document.getElementById('registration-card'),
    btnLogin: document.getElementById('btnLogin'),
    form: document.forms['registrationForm'],
    firstName: document.getElementById('firstName'),
    lastName: document.getElementById('last_name'),
    date_of_birth: document.getElementById('date_of_birth'),
    gender_orientation: document.getElementById('gender_orientation'),
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    nickname: document.getElementById('nickname'),
    phone: document.getElementById('phone'),
    city: document.getElementById('city'),
    country: document.getElementById('country'),
  };

  return signUpUI;
}
