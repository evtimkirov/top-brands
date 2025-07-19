import React from 'react';
import CreateBrandForm from "../features/form/createBrandForm.jsx";

const CreateBrand = () => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <h1>Brand creation form</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <CreateBrandForm />
                </div>
            </div>
        </React.Fragment>
    );
}

export default CreateBrand;
