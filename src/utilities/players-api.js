// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from './send-request';
const BASE_URL = '/api/players';

export function addPlayer(playerData) {
    return sendRequest(BASE_URL, 'POST', playerData);
}
  
export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}
  
export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
}


export function deletePlayer(id) {
    return sendRequest(`${BASE_URL}/${id}/delete`, 'DELETE');
}

export function getPlayerProfile(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export function addTraining(trainingData, playerId) {
    return sendRequest(`${BASE_URL}/${playerId}/trainings`, 'POST', trainingData)
}

export function getPlayerTrainings(playerId) {
    return sendRequest(`${BASE_URL}/trainings/${playerId}`);
}