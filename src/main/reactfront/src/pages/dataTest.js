import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataTest() {
  const[data,setData] = useState('');

  useEffect(() => { // 컴포넌트가 마운트 될 때 실행
    fetch("/data-test")
      .then(response => response.text())
      .then(message => {
        setData(message);
      });
    },[])


return (
    <h2> data : {data}</h2>

);
}

export default DataTest;