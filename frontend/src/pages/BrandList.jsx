import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrandData } from "../api/getBrandsAPI.js";
import { deleteBrand } from "../api/deleteBrandsAPI.js";
import Stars from "../components/Stars.jsx";
import {Link} from "react-router-dom";

const BrandList = () => {
    const dispatch = useDispatch(),
        {items, error, loading} = useSelector((state) => state.brands),
        [country, filterByCountry] = useState('DEFAULT');

    useEffect(() => {
        dispatch(fetchBrandData(country));
    }, [country, dispatch]);

    const handleRemoveBrand = (id) => {
        if (window.confirm('Are you sure?')) {
            dispatch(deleteBrand(id));
        }
    };

    const handleChangeBrand = (e) => {
        filterByCountry(e.target.value);
    }

    return (
        <React.Fragment>
            <h1>Brand list</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            <div className="row">
                <div className="col">
                    <form>
                        <label
                            className="mb-2"
                            htmlFor="brand-country"
                        >
                            Filter by country
                        </label>
                        <select
                            id="brand-country"
                            className="form-control"
                            name="languages"
                            onChange={handleChangeBrand}
                        >
                            <option value="DEFAULT">All brands</option>
                            <option value="US">US brands</option>
                            <option value="BG">BG brands</option>
                            <option value="EN">EN brands</option>
                            <option value="RO">RO brands</option>
                        </select>
                    </form>
                </div>
            </div>
            <hr/>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {items && items.length > 0 ? (
                    items.map((item) => (
                        <div className="col" key={item.id}>
                            <div className="card h-100">
                                <img
                                    src={item.brand_image}
                                    className="card-img-top"
                                    alt={item.brand_name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{item.brand_name}</h5>
                                    <p className="card-text">
                                        <Stars rating={item.rating} />
                                        <button
                                            className="btn btn-sm btn-secondary"
                                            onClick={() => handleRemoveBrand(item.id)}
                                        >
                                            <i className="bi bi-trash">Delete</i>
                                        </button>
                                        <Link
                                            to={`/update-brand/${item.id}`}
                                            className="btn btn-sm btn-warning ms-2"
                                            state={item}
                                        >
                                            <i className="bi bi-pencil">Edit</i>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    !loading && <p className="text-muted">No available brands.</p>
                )}
            </div>
        </React.Fragment>
    );
};

export default BrandList;
