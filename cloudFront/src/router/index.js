import React, { lazy, Suspense } from "react";
import { Redirect } from "react-router-dom";
import ErrorCom from '../component/Error'
import Layout from '../layout/layout'


const HomeComponent = lazy(() => import("../views/Home/home"));
const SingersComponent = lazy(() => import("../views/Sing/singer"));
const RankComponent = lazy(() => import("../views/Rank/rank"));

const LoginComponent = lazy(() => import("../views/Login/login"));

const SuspenseComponent = Component => props => {
    console.log(props)
    return (
        <Suspense fallback={<ErrorCom><p>loading</p></ErrorCom>} >
            <Component {...props}></Component>
        </Suspense>
    )
}

export default [
    {
        path: "/index",
        component: Layout,
        routes: [
            {
                path: "/index",
                exact: true,
                render: () => <Redirect to={"index/home"} />
            },
            {
                path: "/index/home",
                component: SuspenseComponent(HomeComponent),
            },
            {
                path: "/index/sing",
                component: SuspenseComponent(SingersComponent),
            },
            {
                path: "/index/rank",
                component: SuspenseComponent(RankComponent),
            },
        ],
    },
    {
        path: "/login",
        component: SuspenseComponent(LoginComponent),
    },

    {
        path: '*',
        component: () => <h2>404</h2>
    }

] 