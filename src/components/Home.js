import React from "react";

// Hoooksssss
import { useHomeFetch } from "../hooks/useHomeFetch";

//No image
import NoImage from "../images/no_image.jpg";

//config..........
import {BACKDROP_SIZE,POSTER_SIZE,IMAGE_BASE_URL} from "../config";

// Components..............
// Hero Image...........
import HeroImage from "./Header/HeroImage/index";

//grid.....
import Grid from "./Grid/index";

// thumb.......
import Thumb from "./Thumb/index";

//Spinner.............
import Spinner from "./Spinner/index";

//searchbar..........

import SearchBar from "./SearchBar/index";

import Button from "./Button/index";

const Home = ()=>{

    const {state,loading,error,searchTerm,setSearchTerm,setisLoadingMore} = useHomeFetch();
    if(error){
        return <div>Something Went Wrong</div>
    }
    return <div>
    { !searchTerm && state.results[0] ? <HeroImage
    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
    title = {state.results[0].original_title}
    text = {state.results[0].overview}
     />
     : null 
    }
    <SearchBar setSearchTerm= {setSearchTerm}/>
    <Grid header = {searchTerm ? "Search Results" : "Popular Movies"}>
        {
            state.results.map(movie=>(
                <Thumb 
                key = {Math.floor(Math.random() * 1000)}
                clickable
                image = {
                    movie.poster_path ?
                    IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path
                    : NoImage
                }
                moiveId = {movie.id}
                >{movie.title}
                
                
                </Thumb>
            ))
        }

    </Grid>

    {loading && <Spinner/>}

    <Button text='Load more' callback={()=>{
        setisLoadingMore(true)}}/>


    
    

    </div>
}


export default Home;