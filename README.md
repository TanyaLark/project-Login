# project-Login

## Login and Password существующего пользователя:

**Login**: denis.m.pcspace@gmail.com

**Password**: dmgame12345

## Пример передаваемых данных:
```js
email: "denis.m.pcspace@gmail.com",
password: "dmgame12345",
nickname: "dmgame",
first_name: "Denis",
last_name: "Mescheryakov",
phone: "0631234567",
gender_orientation: "male", // or "female"
city: "Kharkiv",
country: "Ukrane",
date_of_birth_day: 01,
date_of_birth_month: 03,
date_of_birth_year: 1989,
```

## В ответе от сервера придёт:
```js
{
  "error":false,
  "auth":true,
  "token":"eyJhbGciOiJIUzI1NiIsInXjauupv9ZXw4oSSU",
  "id":"60621009a73e0f0020bc8ac6"
}
```
