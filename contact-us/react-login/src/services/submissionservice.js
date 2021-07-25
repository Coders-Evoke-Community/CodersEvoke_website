import { getCookie } from "../utils/cookies";

export const getSubmissionsService = (request) => {
    console.log('INSIDE GET SUB SERVICE')
    const GET_SUBMISSIONS_API_ENDPOINT = 'https://coders-evoke-contactus.herokuapp.com/api/submisson/getall';
    const token = getCookie('token')

    const parameters = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token.substring(4)}`
        },
    };

    return fetch(GET_SUBMISSIONS_API_ENDPOINT, parameters)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json;
        });
};