import React from 'react';

const Stars = ({ rating = 0, max = 5 }) => {
    return (
        <div>
            {[...Array(max)].map((_, i) => (
                <span
                    key={i}
                    className={`fa fa-star ${i < rating ? 'checked' : ''}`}
                ></span>
            ))}
        </div>
    );
};

export default Stars;