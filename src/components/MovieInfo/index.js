import React from 'react';

import PropTypes from 'prop-types';
// Components
import Thumb from '../Thumb';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// Image
import NoImage from '../../images/no_image.jpg';
// Styles
import { Wrapper, Content, Text } from './MovieInfo.style';


const MovieInfo = ({ movie }) => {
  

    return<div>
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          alt='movie-thumb'
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>
  
          <div className='rating-directors'>
            <div>
              <h3>RATING</h3>
              <div className='score'>{movie.vote_average}</div>
            </div>
            <div className='director'>
              <h3>DIRECTOR</h3>
               {movie.directors? <MovieDirectors movie = {movie}/>: <p>Unknown</p> }    
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
    </div>

};

const MovieDirectors =({movie})=>{
return <div>
{movie.directors.map(director => (
  <p key={director.credit_id}>{director.name}</p>
))}
</div>
}
MovieInfo.propTypes = {
  movie: PropTypes.object
}

  export default MovieInfo;
  