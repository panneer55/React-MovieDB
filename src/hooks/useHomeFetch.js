import { useEffect,useState } from "react";

import { isPersistedState } from "../helpers";


import API from "../API";

export const useHomeFetch = ()=>{
    const initialState = {
        page:0,
        results:[],
        total_results: 0,
        total_pages:0
    };
    const [searchTerm,setSearchTerm] = useState('');
    const[state,setState] = useState(initialState);
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState(false);
    const [isloadingMore, setisLoadingMore] = useState(false); 

    const fetchMovies = async(page,searchTerm = "")=>{
        try{
            setError(false);
            setLoading(true);
            const movies = await API.fetchMovies(searchTerm,page);
            setState(prev=>({
                ...movies, results: page>1 ?[...prev.results,...movies.results] : [...movies.results]
            }))


        }catch(error){
            setError(true);
            console.log(error);
        }
        setLoading(false);
        
    }
    useEffect(()=>{
        if(!searchTerm){
            const sessionState = isPersistedState('homeState');

            if(sessionState){
                setState(sessionState);
                return;
            }
        }
                               
        fetchMovies(1,searchTerm);
    },[searchTerm])

    useEffect(()=>{
        if(!isloadingMore) return;
        fetchMovies(state.page+1,searchTerm);
         setisLoadingMore(false);   
   },[searchTerm,state.page,isloadingMore])

   // Write to sessionStorage
  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state));
  }, [searchTerm, state]);


    return {state,loading,error,setSearchTerm,searchTerm,setisLoadingMore}
}