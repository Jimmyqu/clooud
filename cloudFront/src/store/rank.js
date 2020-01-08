import { useState ,useEffect} from "react";

const useRank = () => {
    // Let's set a legen -- wait for it -- dary default name that updates on form submit
    const [name2, setName] = useState("");
    return {
      name2,
    };
}

export default useRank

