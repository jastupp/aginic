import React, { useState } from 'react';
import State from '../results/State';
import AddTestForm from "./AddTestForm/AddTestForm";
import connection from '../../mysql/MySQLConnect';

interface IEvent {
    target: { value: string },
    preventDefault: () => void
}

const AddTestPage = () => {

    const QUERY = 'INSERT INTO ServerTasks SET ?';

    const [ disabled, setDisabled ] = useState(true);

    const onChange = (event: IEvent) => setDisabled(event.target.value === '');

    const onSubmit = (event: IEvent) => {
        event.preventDefault();
        connection.query(QUERY, {
            URL: event.target.value,
            state: State.WAITING
        }, (error: any, results: any) => {
            console.log("Error = ", error);
            console.log("Results = ", results);
        })
    }

    return (
        <div>
            <h4 className={'text-center jumbotron'}>Add a URL to test</h4>
            <div className={'mr-5 ml-5'}>
                <AddTestForm disable={disabled} onChange={onChange} onSubmit={onSubmit}/>
            </div>
        </div>
    );
}

export default AddTestPage;