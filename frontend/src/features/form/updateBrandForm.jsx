import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBrandName, setBrandImage, setRating } from './updateBrandFormSlice.js'
import { updateBrandData } from "../../api/updateBrandsAPI.js";
import {useParams} from "react-router-dom";

const UpdateBrandForm = (props) => {
    const dispatch = useDispatch(),
        {
            brand_name,
            brand_image,
            rating,
            status,
            error,
            successMessage
        } = useSelector((state) => state.updateBrandForm),
        params = useParams(),
        id = params.id;

    useEffect(() => {
        dispatch(setBrandName(props.item.brand_name));
        dispatch(setBrandImage(props.item.brand_image));
        dispatch(setRating(props.item.rating));
    }, [props.item, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault()

        const fields = {brand_name, brand_image, rating};
        dispatch(updateBrandData({ id, ...fields }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col mb-3">
                    <label htmlFor="brandNameInput" className="form-label">Brand name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="brandNameInput"
                        value={brand_name}
                        required
                        onChange={(e) => dispatch(setBrandName(e.target.value))}
                    />
                </div>
                <div className="col mb-3">
                    <label
                        htmlFor="brandImageUrlInput"
                        className="form-label"
                    >
                        Brand image URL
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="brandImageUrlInput"
                        value={brand_image}
                        required
                        onChange={(e) => dispatch(setBrandImage(e.target.value))}
                    />
                </div>
                <div className="col mb-3">
                    <label htmlFor="rating">Rating</label>
                    <select
                        className="form-select"
                        aria-label="Rating"
                        id="rating"
                        value={rating}
                        required
                        onChange={(e) => dispatch(setRating(e.target.value))}
                    >
                        <option value="">Open this select menu</option>
                        <option value="1">One star</option>
                        <option value="2">Two stars</option>
                        <option value="3">Three stars</option>
                        <option value="4">Four stars</option>
                        <option value="5">Five stars</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button
                        type="submit"
                        className="btn btn-success"
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? 'Editing...' : 'Edit'}
                    </button>

                    {successMessage && <p className="text-success">{successMessage}</p>}
                    {error && <p className="text-danger">{error}</p>}
                </div>
            </div>
        </form>
    )
}

export default UpdateBrandForm;
