import ResultList from "./ResultList/ResultList";
import React, { useEffect, useState } from 'react';
import { getResults } from "../../api/TestResults/TestResultsApi";

/**
 * The resultPage component
 */
const ResultPage = () => {

    // set the results in state
    const [ results, setResults ] = useState([]);

    /**
     * Called when the component is rendered
     */
    useEffect(() => {
        // set the results into state
        (async () => {
            const results = await getResults();
            setResults(await getResults());
            console.log("Use Effect", results);
        })();
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