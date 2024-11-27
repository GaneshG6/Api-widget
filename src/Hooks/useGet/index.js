import React, { useEffect, useState } from "react";
function useGet(url) {
  console.log(url);
  
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState({})
    // useEffect(()=>{
    //    fetchData()
    // },[])
    const fetchData = async () => {
        try{
           
        const response = await fetch(url);
        const data = await response.json();
        setData(data)
        return data;
    }
    catch(error){
        setError(error)
        return error
    }finally{
        setLoading(false)
    }
      };
    return {loading, data, error, fetchData}
}

export {useGet}