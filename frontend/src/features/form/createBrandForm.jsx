import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBrandName, setBrandImage, setRating } from './createBrandFormSlice.js'
import { createBrandData } from "../../api/storeBrandsAPI.js";

const CreateBrandForm = () => {
    const dispatch = useDispatch(),
        {
            brand_name,
            brand_image,
            rating,
            status,
            error,
            successMessage
        } = useSelector((state) => state.createBrandForm);


    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(createBrandData({ brand_name, brand_image, rating }));
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
                        {status === 'loading' ? 'Saving...' : 'Save'}
                    </button>

                    {successMessage && <p className="text-success">{successMessage}</p>}
                    {error && <p className="text-danger">{error}</p>}
                </div>
            </div>
        </form>
    )
}

export default CreateBrandForm;
