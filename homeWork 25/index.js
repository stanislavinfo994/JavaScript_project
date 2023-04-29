import { getSwapiData } from './swapi-api.js';

const form = document.getElementById('swapi-form');
const endpointInput = document.getElementById('endpoint-input');
const resultContainer = document.getElementById('result-container');
const loader = document.getElementById('loader');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const endpoint = endpointInput.value.trim();
    if (endpoint === '') {
        return;
    }
    showLoader();
    try {
        const data = await getSwapiData(endpoint);
        if (data.status === 'success') {
            showData(data);
        } else {
            showError(data.error);
        }
    } catch (error) {
        showError(error.message);
    } finally {
        hideLoader();
    }
});

function showLoader() {
    loader.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
}

function showData(data) {
    resultContainer.innerHTML = `
		<pre style="display: none">ID: ${data.id}</pre>
		<pre style="display: none">Controller: ${data.controller}</pre>
		<pre>${JSON.stringify(data.data, null, 2)}</pre>
	`;
}

function showError() {
    resultContainer.innerHTML = `
		<pre>404 error: try people/1/ or planets/3/ or starships/9/</pre>
	`;
}
