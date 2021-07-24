import { getCookie } from "../utils/cookies";

export const getSubscriptionsService = (request) => {
    const GET_SUBSCRIPTIONS_API_ENDPOINT = 'http://localhost:8080/api/subscription/getall';
    const token = getCookie('token')

    const parameters = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token.substring(4)}`
        },
    };

    return fetch(GET_SUBSCRIPTIONS_API_ENDPOINT, parameters)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json;
        });
};

export const createSubscriptionService = (request) => {
    const CREATE_SUBSCRIPTIONS_API_ENDPOINT = 'http://localhost:8080/api/subscription/create';
    const token = getCookie('token')
    console.log(request, "request value in service")

    const parameters = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token.substring(4)}`
        },
        body: JSON.stringify(request.data)
    };

    return fetch(CREATE_SUBSCRIPTIONS_API_ENDPOINT, parameters)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json;
        });
};

export const deleteSubscriptionService = (request) => {
    const DELETE_SUBSCRIPTIONS_API_ENDPOINT = 'http://localhost:8080/api/subscription/remove';
    const token = getCookie('token')

    const parameters = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token.substring(4)}`
        },
        body: JSON.stringify(request.data)
    };

    return fetch(DELETE_SUBSCRIPTIONS_API_ENDPOINT, parameters)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json;
        });
};

