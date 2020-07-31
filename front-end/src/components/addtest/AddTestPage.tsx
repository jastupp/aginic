import React, { useState } from 'react';
import State from '../results/State';
import AddTestForm from "./AddTestForm/AddTestForm";
import { addTestURL } from "../../api/TestResults/TestResultsApi";

interface IEvent {
    target: { value: string },
    preventDefault: () => void
}

const AddTestPage = () => {

    //const QUERY = 'INSERT INTO ServerTasks SET ?';

    const [ URL, setURL ] = useState('');

    const onChange = (event: IEvent) => setURL(event.target.value);

    const onSubmit = (event: IEvent) => {
        event.preventDefault();
        console.log("onSumit = ", event.target);
        addTestURL(URL);

        // connection.query(QUERY, {
        //     URL: event.target.value,
        //     state: State.WAITING
        // }, (error: any, results: any) => {
        //     console.log("Error = ", error);
        //     console.log("Results = ", results);
        // })
    }

    return (
        <div>
            <h4 className={'text-center jumbotron'}>Add a URL to test</h4>
            <div className={'mr-5 ml-5'}>
                <AddTestForm URL={URL} onChange={onChange} onSubmit={onSubmit}/>
            </div>
        </div>
    );
}

export default AddTestPage;