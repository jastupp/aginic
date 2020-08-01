import React from 'react';
import ResultItem from "../ResultItem/ResultItem";

interface IResultsList {
    results: {
        URL: string,
        state: string
    }[];
}

const ResultList = ({ results }: IResultsList) => {

    return (
        <ul className="list-group">
            {results.map((data, index) => (
                <ResultItem key={index} URL={data.URL} status={data.state} />
            ))}
        </ul>
    )
}

export default ResultList;