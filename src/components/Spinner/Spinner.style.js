import styled, { keyframes } from "styled-components";

export const Spinner = styled.div`
border: 5px solid var(--lightGrey);
border-top: 5px solid var(--medGrey);
border-radius: 50%;
width: 50px;
height: 50px;
margin: 20px auto;
animation: spining 0.8s linear infinite;

@keyframes spining {
    0%{
        transform: rotate(0deg) 
    }
    100%{
        transform: rotate(360deg)
    }
}
`;


