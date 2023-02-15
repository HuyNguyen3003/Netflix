import React from 'react'
import backgroud from "../asstes/VN-vi-20230206-popsignuptwoweeks-perspective_alpha_website_large.jpg"
import styled from "styled-components"

export default function BackgroundImage() {
    return (
        <>
            <Component >
                <img src={backgroud} alt="backgroud" />
            </Component>
        </>
    )
}



const Component = styled.div`
height:100vh;
width:100vw;
img{
    height:100vh;
    width:100vw;
}
`
