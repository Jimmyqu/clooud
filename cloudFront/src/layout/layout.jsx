import React from "react";
import styled from 'styled-components'

const HomeContainer = styled.div`
    height:100vh;
    position: relative;
`
const Footer = styled.div`
    position:absolute;
    bottom:0;
    height:8vh;
    line-height:8vh;

` 
function Layout(props) {
    return (
        <HomeContainer>
            <Footer>
                footer
            </Footer>
        </HomeContainer>
    )
}

export default Layout