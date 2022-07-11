import React from "react";

export default function Ratings (rating) {
    let stars = [];
    for (let index = 0; index < 5; index++) {
        index < rating ? stars.push('good') : stars.push('bad');
    };

    return (
        <>
        {stars.map(
            function(item) {
                return item === 'good' ? <span>&#9733;</span>: <span>&#9734;</span>;
            }
        )}
        </>
    )
}