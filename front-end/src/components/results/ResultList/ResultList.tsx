import React from 'react';
import ResultItem from "../ResultItem/ResultItem";

/**
 * The Interface for the ResultList
 */
interface IResultsList {
    results: {
        URL: string,
        state: string
    }[];
}

/**
 * The resultList component
 *
 * @param results - the results to display
 */
const ResultList = ({ results }: IResultsList) => (
    <ul className="list-group">
        {results.map((data, index) => (
            <ResultItem key={index} URL={data.URL} status={data.state} />
        ))}
    </ul>
);


export default ResultList;