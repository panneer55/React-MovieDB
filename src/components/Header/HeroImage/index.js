import React from "react";

import { Wrappper,Content, Text } from "./HeroImage.style";

import Proptypes from "prop-types";


const HeroImage = ({image,title,text})=>(
    <Wrappper image = {image} >
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrappper>
)
HeroImage.proptypes = {
    title : Proptypes.string,
    text: Proptypes.string,
    image: Proptypes.string
}

export default HeroImage;