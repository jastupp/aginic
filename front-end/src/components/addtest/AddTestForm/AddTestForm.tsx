import React from 'react';

interface IAddTestForm {
    disable: boolean,
    onChange: (event: any) => void,
    onSubmit: (event: any) => void
}

const AddTestForm = ({disable, onChange, onSubmit} : IAddTestForm) => {
    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">http://</span>
                    </div>
                    <input onChange={onChange} type="text" className="form-control" id="input-url" aria-describedby="basic-addon3"/>
                </div>
            </div>
            <div className={'text-right'}>
                <button disabled={disable} type="submit" className="btn btn-primary">Test</button>
            </div>
        </form>
    );
}


export default AddTestForm;