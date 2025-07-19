import React from 'react';
import UpdateBrandForm from "../features/form/updateBrandForm.jsx";
import {useLocation} from "react-router-dom";

const UpdateBrand = () => {
    const location = useLocation();

    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <h1>Update brand form</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <UpdateBrandForm item={location.state} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default UpdateBrand;
