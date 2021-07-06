import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import { login } from './services/auth.service';
import { notify } from './views/notifications';
import { registration } from './views/registration';

const { form, inputEmail, inputPassword } = UI;
const inputs = [inputEmail, inputPassword];

//Events
form.addEventListener('submit', (e) => {
  e.preventDefault();
  onSubmit();
});
inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));

registration();

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

  try {
    await login(inputEmail.value, inputPassword.value);
    // await getNews();
    form.reset();
    notify({ mas: 'Login success', className: 'alert-success' });
  } catch (error) {
    notify({ mas: 'Login faild', className: 'alert-danger' });
  }

}

// Login: denis.m.pcspace@gmail.com
// Password: dmgame12345

// Реализовать регистрацию.
// Метод запроса: POST.
// Роут для запроса: /auth/signup

// Пример передаваемых данных (ключи в объекте обязательно должны быть такими же как в примере):
// email: "denis.m.pcspace@gmail.com",
// password: "dmgame12345",
// nickname: "dmgame",
// first_name: "Denis",
// last_name: "Mescheryakov",
// phone: "0631234567",
// gender_orientation: "male", // or "female"
// city: "Kharkiv",
// country: "Ukrane",
// date_of_birth_day: 01,
// date_of_birth_month: 03,
// date_of_birth_year: 1989,


// В ответе от сервера прейдет:
// {
// 	error: false, 
// 	message: "User created success. On your email sended link. Please verify your email."
// }

// Для регистрации используйте обязательно настоящий email так как вам туда придет ссылка для активации аккаунта.
// Форму с регистрацией разместите на странице логина в виде табов т.е форма логина отдельный таб, форма регистрации отдельный таб.

// 2 Реализовать autocomplete в форме регистрации в полях countries и cities

// Метод запроса: GET,

// Роут для запроса: /location/get-countries

// Вам прийдет массив стран, при выборе страны берете индекс из массива на котором была страна и делаете GET запрос на адрес location/get-cities/{COUNTRY_INDEX}

// вместо COUNTRY_INDEX подставляете свой ранее полученный индекс страны индекс

// В ответ вам прейдет список городов по этой стране, который вы должны вывести в селект.

// Изначально поля для ввода города должно быть disabled.

// В качестве самих эелементов можете использовать нативные элементы из html

// Или можете взять из jQuery UI элемент Autocomplete
