import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./BreadCrumb.style";
import PropTypes from 'prop-types';

const BreadCrumb = ({movieTitle})=>{
    

    return<>
    <Wrapper>
        <Content>
            <Link to="/">
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>


    </>
}

BreadCrumb.prototypes= {
    movieTitle: PropTypes.string
}


export default BreadCrumb;