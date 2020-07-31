
//const baseUrl = process.env.API_URL + "test-results";
const baseUrl = "/getTests";

const getTestResults = () => fetch(baseUrl);

const addTestURL = (url: string) => {

    return url;
}

export {
    getTestResults
}