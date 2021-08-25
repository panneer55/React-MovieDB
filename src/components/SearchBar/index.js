import React, { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";

//search icon

import SearchIcon from "../../images/search-icon.svg";

import { Wrapper, Content } from "./SearchBar.style";

const SearchBar = ({setSearchTerm})=>{
    const [state,setState] = useState();
    const initial = useRef(true);

    useEffect(()=>{

        if(initial.current){
            initial.current=false;
            return;
        }

        const timer= setTimeout(()=>{
            setSearchTerm(state);
        },500)
        return ()=> clearTimeout(timer);
    },[setSearchTerm,state])


    return(
        <Wrapper>
            <Content>
                <img src={SearchIcon} alt="search-icon" />
                <input type="text" placeholder="Search Movie"
                onChange={(event)=> setState(event.target.value)}
                value={state} />
            </Content>
        </Wrapper>
    )
}

SearchBar.propTypes = {
    callback: PropTypes.func
  };


export default SearchBar;