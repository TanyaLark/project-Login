import { registrationUI } from '../config/sign.up.ui.config';
import { signUp } from '../services/auth.service';
import { validate } from '../helpers/validate';
import { getCountries, getCities } from '../services/location.service';

function loginTemplate() {
  const template = `
  <div class="card-body" id="login-card">
  <h4 class="card-title">Please Login or <button type="button" class="btn btn-secondary"> Sign up</button> </h4>
  <form name="loginForm">
    <div class="form-group">
      <label for="email">Email address</label>
      <input
        type="email"
        class="form-control"
        id="email"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        data-required="email"
        data-invalid-message="Please provide valid email example@example.com"
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="Password"
        data-required="password"
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
  `;
  return template;
}
 
function regFormTemplate(str) {
  const template = `
 <div class="card-body" id="registration-card">
    <h4 class="card-title">Please Sign up or <button type="button" class="btn btn-secondary" id="btnLogin">Login</button> </h4>
    <form name="registrationForm">
        <div class="form-group">
            <div class="row">
              <div class="col">
                <label for="firstName">First name</label>
                <input type="text" class="form-control" id="firstName" placeholder="First name" aria-label="First name">
              </div>
              <div class="col">
                <label for="last_name">Last name</label>
                <input type="text" class="form-control" id="last_name" placeholder="Last name" aria-label="Last name">
              </div>
            </div>
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col">
              <label for="date_of_birth"> Date of birth </label>
              <input type="text" class="form-control" id="date_of_birth" placeholder="dd.mm.yyyy" aria-label="Date of birth">
            </div>
            <div class="col">
              <label for="gender_orientation" class="form-label">Gender orientation</label>
              <select class="form-select form-control" id="gender_orientation" required>
                <option selected disabled value="">Choose...</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <div class="invalid-tooltip">
                Please select a valid state.
              </div>
            </div>
          </div>
        </div>             
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          data-required="email"
          data-invalid-message="Please provide valid email example@example.com"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          data-required="password"
        />
      </div>
      <div class="form-group">
          <label for="nickname">Nickname</label>
          <input
            type="text"
            class="form-control"
            id="nickname"
            placeholder="Nickname"
          />
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input
            type="number"
            class="form-control"
            id="phone"
            placeholder="Phone"
          />
        </div>
        <div class="form-group">
            <div class="row">
            <div class="col">
              <label for="country">Country</label>
              <input type="text" class="form-control" list="datalistCountry" id="country" placeholder="Country" aria-label="country">
              <datalist id="datalistCountry">
                ${str}
              </datalist>
            </div>
            <div class="col">
              <label for="city"> City </label>
              <input type="text" 
              class="form-control" 
              list="datalistCity" 
              id="city" 
              placeholder="City" 
              aria-label="City"
              disabled>
              <datalist id="datalistCity"> </datalist>
            </div>
            </div>
        </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
 `;
  return template;
}

let arrCountries;
async function initAutocompleteCountries() {
  const countries = await getCountries();
  arrCountries = Object.values(countries);
  let str = '';
  for (let i = 0; i < arrCountries.length; i++) {
    str += `
     <option value="${arrCountries[i]}"> 
     `;
  }
  return str;
}

function initAutocompleteCities() {
  const country = document.getElementById('country');
  let cities;
  country.addEventListener('change', async () => {
    const index = arrCountries.indexOf(country.value) + 1;
    cities = await getCities(index);
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < cities.length; i++) {
      const option = document.createElement('option');
      option.setAttribute('value', `${cities[i]}`);
      fragment.appendChild(option);
    }
    const city = document.getElementById('city');
    city.removeAttribute('disabled'); 
    const datalistCity = document.getElementById('datalistCity');  
    datalistCity.appendChild(fragment); 
  });
}

function removeCardBody(el) {
  return el.remove();
}

function addLoginCard() {
  const regCard = document.getElementById('registration-card');
  const btnLogin = regCard.firstElementChild.firstElementChild;
  btnLogin.addEventListener('click', (e) => {
    removeCardBody(regCard);
    const formCard = document.querySelector('.form-card');
    formCard.insertAdjacentHTML('afterbegin', loginTemplate());
    registration();
  });
}

export function registration() {
  const loginCard = document.getElementById('login-card');
  const btnSignUp = loginCard.firstElementChild.firstElementChild;

  btnSignUp.addEventListener('click', async (e) => {
    removeCardBody(loginCard);
    const formCard = document.querySelector('.form-card');
    const strOptionCountries = await initAutocompleteCountries();
    formCard.insertAdjacentHTML('afterbegin', regFormTemplate(strOptionCountries));
    
    initAutocompleteCities();

    const regUI = registrationUI();
    const { form, firstName, lastName, date_of_birth, gender_orientation, email, password, nickname, phone, city, country } = regUI;

    let inputs = [email, password];
    let date_of_birth_day, date_of_birth_month, date_of_birth_year;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let date_of_birth_arr = date_of_birth.value.split('.', 3);
      date_of_birth_day = +date_of_birth_arr[0];
      date_of_birth_month = +date_of_birth_arr[1];
      date_of_birth_year = +date_of_birth_arr[2];
      onSubmit();
    });

    //Handlers
    async function onSubmit() {
      const isValidForm = inputs.every(el => {
        const isValidInput = validate(el);
        if (!isValidInput) {
          showInputError(el);
        }
        return isValidInput;
      });

      if (!isValidForm) return;

      await signUp(email.value, password.value, nickname.value, firstName.value, lastName.value, phone.value, gender_orientation.value, city.value, country.value, date_of_birth_day, date_of_birth_month, date_of_birth_year);

      form.reset();
    }

    addLoginCard();
  });
}
