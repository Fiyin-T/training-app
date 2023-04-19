// Serice modules hold the code that implements
// "business"/application logic
// Service methods often depend upon or use
// methods in the API modules

// Import all named exports
import * as playersAPI from './players-api';

export async function signUp(playerData) {
  // Delegate the AJAX request to the players-api.js
  // module.
  const token = await playersAPI.signUp(playerData);
  localStorage.setItem('token', token);
  // return token
  return getPlayer();
}

export function getToken() {
  // getItem will return null if the key does not exist
  const token = localStorage.getItem('token');
  if (!token) return null;
  // Let's check if token has expired...
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getPlayer() {
  const token = getToken();
  return token ?
    JSON.parse(atob(token.split('.')[1])).player
    :
    null;
}

export function logOut() {
  localStorage.removeItem('token');
}

export async function login(credentials) {
  // Delegate the AJAX request to the players-api.js
  // module.
  const token = await playersAPI.login(credentials);
  localStorage.setItem('token', token);
  return getPlayer();
}

export async function checkToken() {
  return playersAPI.checkToken()
    .then(dateStr => new Date(dateStr));
}