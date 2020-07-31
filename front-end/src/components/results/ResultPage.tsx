import ResultList from "./ResultList/ResultList";
import React, { useEffect, useState } from 'react';
import { getResults } from "../../api/TestResults/TestResultsApi";

const ResultPage = () => {

    const [ results, setResults ] = useState([]);

    useEffect(() => {
        getResults()
            .then(response => response.text())
            //.then(data => setResults(data))
            .then(data => console.log("TEXT = ", data))
            .catch(error => console.log(error));

    }, [results.length]);

    return (
        <div>
            <h4 className='text-center jumbotron'>The API Test Results</h4>
            <div className='mr-5 ml-5'>
                <ResultList results={results}/>
            </div>
        </div>
    )
}

export default ResultPage;