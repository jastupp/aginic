import React, { useState } from 'react';
import AddTestForm from "./AddTestForm/AddTestForm";

interface IEvent {
    target: {
        value: string
    }
}

const AddTestPage = () => {

    const [ disabled, setDisabled ] = useState(true);

    const onChange = (event: IEvent) => setDisabled(event.target.value === '');

    const onSubmit = (event: IEvent) => {
        alert('here');
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