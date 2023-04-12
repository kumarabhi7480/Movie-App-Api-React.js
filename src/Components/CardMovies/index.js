import React from 'react';
import { Link } from 'react-router-dom';

const CardMoviesComponents = ({data, mediaType}) => {
    const id=data.id;
    const media_type = data.media_type ? data.media_type : data.type ? data.type : mediaType;

    const ImageURL = '';
    const title = '';
    return (
        <>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                <Link to={`/details/${id}/${media_type}`} >
                <figure>
                    <span>
                        <img src={ImageURL} alt={title} />
                    </span>
                </figure>
                </Link>
            </div>
        </>
    );
};

export default CardMoviesComponents;