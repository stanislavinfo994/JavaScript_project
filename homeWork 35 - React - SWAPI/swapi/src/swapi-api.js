const API_URL = 'https://swapi.dev/api/';

export async function getSwapiData(endpoint) {
    try {
        const response = await fetch(API_URL + endpoint);
        const data = await response.json();
        if (response.ok) {
            return {
                status: 'success',
                id: response.headers.get('x-swapi-id'),
                controller: response.headers.get('x-swapi-controller'),
                data: data,
            };
        } else {
            return {
                status: 'error',
                error: data.detail || response.statusText,
            };
        }
    } catch (error) {
        return {
            status: 'error',
            error: error.message,
        };
    }
}
