import React from "react";
import { useParams } from "react-router";

//config........
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// ComponentS
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";

import useMovieFetch from '../hooks/useMovieFetch';


// No Image......
import NoImage from "../images/no_image.jpg";


const Movie = ()=>{
    const {movieId} = useParams();
    const {state:movie, loading,error} = useMovieFetch(movieId)

    if(loading) return <Spinner/>;
    if(error) return <div>oops..! Something Went Wrong</div>;

    return <div>

    <BreadCrumb 
    movieTitle = {movie.original_title}/>
    <MovieInfo movie = {movie}/>
    <MovieInfoBar time = {movie.runtime} budget = {movie.budget} revenue = {movie.revenue} />
    <Grid header = 'Actors'>
         {movie.actors ? <MovieActors movie = {movie} /> : <Spinner/>}
    </Grid>

    </div>    

}

const MovieActors = ({movie})=>(
    movie.actors.map((actor)=>(
        <Actor name = {actor.name} 
        key = {Math.floor(Math.random() * 1000)}
        chartacter = {actor.character} 
        imageUrl={
            actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : NoImage
        } />
        ))
)

export default Movie;