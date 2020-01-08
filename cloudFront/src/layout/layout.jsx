import React from "react";
import styled from 'styled-components'
import style from "../assets/global-css";
import { HashRouter, NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from '../router/index'

const HomeContainer = styled.div`
    height:100vh;
    position: relative;
`

const Tab = styled.div`
    height: 44px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color:${style['theme-color']}
    a {
        flex: 1;
        padding: 2px 0;
        font-size: 14px;
        color: #e4e4e4;
        &.selected {
        span {
            padding: 3px 0;
            font-weight: 700;
            color: #f1f1f1;
            border-bottom: 2px solid #f1f1f1;
        }
        }
    }
`
const TabItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function Layout(props) {
  
    return (
            <HomeContainer>
                <Tab>
                    <NavLink to="/index/home" activeClassName="selected">
                        <TabItem>
                            <span>推荐</span>
                        </TabItem>
                    </NavLink>
                    <NavLink to="/index/sing" activeClassName="selected">
                        <TabItem>
                            <span>歌手</span>
                        </TabItem>
                    </NavLink>
                    <NavLink to="/index/rank" activeClassName="selected">
                        <TabItem>
                            <span>排行榜</span>
                        </TabItem>
                    </NavLink>
                </Tab>
                {renderRoutes(props.route.routes)}
            </HomeContainer>
    )
}

export default Layout