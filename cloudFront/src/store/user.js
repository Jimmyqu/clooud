import { useState ,useEffect} from "react";
import {getLocalList} from '../api/apis'

const useUer = () => {
  const [input, setValue] = useState("");
  const [name, setName] = useState("Barney Stinson");
  const [asyncData,setAsyncData] = useState([])

  useEffect(()=>{
    console.log('effect')
    // getLocalList().then(res=>{
    //     console.log(res)
    //     setAsyncData(res.result.songs)
    // })
  },[])


  return {
    input,
    name,
    asyncData
  };
}
 
export default useUer

