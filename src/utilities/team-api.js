// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from './send-request';
const BASE_URL = '/api/team';

export function getTeam() {
    return sendRequest(`${BASE_URL}`);
}
