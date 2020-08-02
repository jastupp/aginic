import React from 'react';

/**
 * Interface for the add test form
 */
interface IAddTestForm {
    URL: string,
    onChange: (event: any) => void,
    onSubmit: (event: any) => void
}

/**
 * The add form Component
 *
 * @param URL - the URL
 * @param onChange - called when the url is changed
 * @param onSubmit - called when the form is submitted
 * @constructor
 */
const AddTestForm = ({URL, onChange, onSubmit} : IAddTestForm) =>  (
    <form onSubmit={onSubmit}>
        <div className="form-group">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">http://</span>
                </div>
                <input value={URL} onChange={onChange} type="text" className="form-control" id="input-url" aria-describedby="basic-addon3"/>
            </div>
        </div>
        <div className={'text-right'}>
            <button disabled={URL === ''} type="submit" className="btn btn-primary">Test</button>
        </div>
    </form>
);


export default AddTestForm;