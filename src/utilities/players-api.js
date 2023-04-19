// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from './send-request';
const BASE_URL = '/api/players';

export function signUp(playerData) {
    return sendRequest(BASE_URL, 'POST', playerData);
}
  
export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}
  
export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
}
