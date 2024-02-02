import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataTest() {
  const[data,setData] = useState('');

  useEffect(() => { // 컴포넌트가 마운트 될 때 실행

           axios.get('/api/test')
           .then(response => setData(response.data))
           .catch(error => console.log(error))

    },[])


return (
    <h2> data : {data}</h2>

);
}

export default DataTest;