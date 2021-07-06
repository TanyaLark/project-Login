import axios from '../plugins/axios';

/**
 * Function login. Make login request to API
 * @param {String} email 
 * @param {String} password 
 */

export async function login(email, password){
  try {
    const response = await axios.post(
    `/auth/login`,
    JSON.stringify({ email, password }), 
    );

    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}

/**
 * Function signUp. Make signUp request to API
 * @param {String} email 
 * @param {String} password 
 * @param {String} nickname 
 * @param {String} first_name 
 * @param {String} last_name 
 * @param {String} phone 
 * @param {String} gender_orientation 
 * @param {String} city 
 * @param {String} country 
 * @param {Number} date_of_birth_day 
 * @param {Number} date_of_birth_month 
 * @param {Number} date_of_birth_year 
 * @returns 
 */

 export async function signUp(email, password, nickname, first_name, last_name, phone, gender_orientation, city, country, date_of_birth_day, date_of_birth_month, date_of_birth_year){
  try {
    const response = await axios.post(
      `/auth/signup`,
      JSON.stringify({ email, password, nickname, first_name, last_name, phone, gender_orientation, city, country, date_of_birth_day, date_of_birth_month, date_of_birth_year }), 
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
