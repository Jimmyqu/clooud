import React,{useRef,useState} from "react";
import  {Store} from "../../store/index";
import styled from 'styled-components'

const DargDiv = styled.div`
  height:200px;
  width:100%;
  background-color:rebeccapurple;
  position:absolute;
  top:${props=>(44+props.move)+'px'};
`

function Rank() {
  // console.log(Store)
  let dargDiv = useRef(null)
  let [moveY,setMove]= useState(0)

  function handleDown(e){
    e.persist()
    let sY = e.pageY

    dargDiv.current.onmousemove = (e)=>{
      moveY = e.pageY - sY
      setMove(moveY)    
    }

    dargDiv.current.onmouseup = (e)=>{
      console.log('up')
      dargDiv.current.onmousemove = null
    }
  }

  const {name,item,handleInput,handleSubmit} = Store.useContainer()
  return (
    <>
        {/* <input type="text"  onChange={(e)=>handleInput(e)} /> */}
      <DargDiv ref={dargDiv} move={moveY} onMouseDown={handleDown}></DargDiv>
      {/* <button onClick={handleSubmit}>handleSubmit</button> */}
    </>
  );
}

export default Rank;
