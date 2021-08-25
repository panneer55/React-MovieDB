import React from 'react';

import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import { Image } from './Thumb.style';

const Thumb =({image,moiveId, clickable})=>(
    <div>
        {
            clickable?(
                <Link to={`/${moiveId}`} >
                <Image src = {image} alt="Thumb-Image" />
                </Link>
            )
            :(
            <Image src = {image} alt="Thumb-Image" />
            )}
    </div>
)
Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool
  };

export default Thumb;