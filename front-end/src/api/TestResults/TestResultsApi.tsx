
//const baseUrl = process.env.API_URL + "test-results";
const baseUrl = "http://192.168.10.50:3001/test-results";

const getTestResults = () => fetch(baseUrl);

export {
    getTestResults
}