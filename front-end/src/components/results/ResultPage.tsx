import ResultList from "./ResultList/ResultList";
import React, { useEffect, useState } from 'react';
import { getTestResults } from "../../api/TestResults/TestResultsApi";

const ResultPage = () => {

    const [ results, setResults ] = useState([]);

    useEffect(() => {
        getTestResults()
            .then(response => response.json())
            .then(data => setResults(data));

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