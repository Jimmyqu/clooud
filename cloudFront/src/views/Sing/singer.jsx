import React ,{useState,Fragments} from 'react';
import { Store} from "../../store/index";
import styled from 'styled-components'


const Tab = styled.div`
  display:flex;
  div{
    flex:1;
    text-align:center;
  }
`

const TabItem =  styled.div`
  background-color:${props=>props.active?'red':'#fff'};
`

const TabContent = styled.div`
  width:100vw;
  height:50vh;
  overflow: hidden;
`
const TabContentItem =styled.div`
  width:100vw;
  display:inline-block;
`

function Tabs(props){
  const [nowIndex,setIndex] = useState(0)
  console.log(props.children)
  return <Tab >{props.list.map((item,index)=><TabItem active={index==nowIndex} onClick={(e)=>{setIndex(index)}} key={index}>{item}</TabItem>)}</Tab>
}

function Sing(props) {
  return (
    <div>
      <Tabs list={[111,222,33]}> 
      </Tabs>
      <TabContent>
        <div style={{width:'300vw'}}>
            {[1,2,3].map((item,index)=><TabContentItem>{item}</TabContentItem>)}
        </div>
      </TabContent>
    </div>
  );
}

export default Sing;
