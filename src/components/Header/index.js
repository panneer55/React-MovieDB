import React from "react";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogoImg  from "../../images/tmdb_logo.svg";

import { Link} from "react-router-dom";

import { Wrapper,Content,LogoImg,TmdbLogoImg } from "./Header.style";

const Header = ()=>(
    <Wrapper>
        <Content>
            <Link to='/'>
            <LogoImg src={RMDBLogo} alt="Rmdb-Logo" />
            </Link>
            <TmdbLogoImg src ={TMDBLogoImg} alt="Tmdb-Logo"/>
        </Content>
    </Wrapper>

)




export default Header;