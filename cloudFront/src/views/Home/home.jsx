import React ,{useState,useEffect,useRef} from 'react';
import styled from 'styled-components'
import { TransitionMotion, spring } from 'react-motion'
import {Button} from 'antd'
const RedBox =styled.div`
    height:${props=>props.isFocus?'30vh':'60vh'};
    transition:height .5s ;
    overflow: hidden;
    background-color:${props=>props.isFocus?'red':'#fff'};
`;


const GreenBox =styled.div`
    height:30vh;
    background-color:green;
`;

function HomeView(props){
    const [isFocus,setFocus] = useState(false)
    const inputVal = useRef(null)
    useEffect(()=>{ 
        console.log('effect')
        console.log(isFocus)      
        return  ()=>console.log('cleanup')
    },[])

    function handleClick(){
        console.log(inputVal.current)
    }
    return <div>
        <input ></input>      
        <RedBox  onClick={()=>setFocus(!isFocus)} isFocus={isFocus}>
        </RedBox>
        <GreenBox ref={inputVal}/>
        <button onClick={handleClick}>获取</button>
    </div>
}

export default HomeView