import State from "../../components/results/State";

const baseUrl = "/test";

/**
 * Get the test results from the rest server
 */
const getResults = async () => await (await fetch(baseUrl)).json();

/**
 * Add a test URL
 *
 * @param url
 */
const addTestURL = (url: string) => {
    console.log("URL = ", url);
    fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({URL: url, state: State.WAITING})
    });
}

export {
    getResults,
    addTestURL
}