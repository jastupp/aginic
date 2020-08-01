import React from 'react';
import State from '../State';

interface IResultItem {
    URL: string,
    status: string
}

const ResultItem = ({URL, status}: IResultItem) => {

    let css = 'list-group-item ';
    status === State.WAITING && (css += 'list-group-item-info');
    status === State.PENDING && (css += 'list-group-item-warning');
    status === State.SUCCESS && (css += 'list-group-item-success');
    status === State.FAILURE && (css += 'list-group-item-danger');

    return <li className={css}>{URL}</li>
}

export default ResultItem;


