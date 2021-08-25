import React from "react";

import { Wrappper,Content, Text } from "./HeroImage.style";


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

export default HeroImage;