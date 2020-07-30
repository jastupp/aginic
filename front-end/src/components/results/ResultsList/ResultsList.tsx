import React from 'react';
import ResultItem from "../ResultItem/ResultItem";

interface IResultsList {
    results: {
        url: string,
        state: string
    }[];
}

const ResultsList = ({ results }: IResultsList) => {

    return (
        <ul className="list-group">
            {results.map((data, index) => (
                <ResultItem key={index} URL={data.url} status={data.state} />
            ))}
        </ul>
    )
}

export default ResultsList;