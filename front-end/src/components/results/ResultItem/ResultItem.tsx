import React from 'react';
import State from '../State';

interface IResultItem {
    URL: string,
    status: string
}

const ResultItem = ({URL, status}: IResultItem) => {

    let css = 'list-group-item ';
    status === State.SUCCESS && (css += 'list-group-item-success');
    status === State.FAILED && (css += 'list-group-item-danger');
    status === State.PENDING && (css += 'list-group-item-warning');

    return <li className={css}>{URL}</li>
}

export default ResultItem;


