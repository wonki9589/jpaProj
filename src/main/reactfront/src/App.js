import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";


const RecordForm = ({numList, setNumList}) => {
    const [num , setNum] = useState(0)

    return (
        <div>
            <div> 현재 숫자 : {num} </div>
            <button onClick ={() => setNum(num +1)}>숫자 증가</button>
            <button onClick ={() => setNum(num -1)}>숫자 감소</button>
            <button onClick ={() => setNum(0)}>숫자 초기화</button>
            <hr/>
            <button onClick = {() => setNumList([...numList , num])}> 숫자 기록 </button>
            <button onClick = {() => setNumList([])}> 숫자 초기화 </button>
        </div>
    )

}

//const count = ({numList}) => {
//    return(
//        <h2>
//        {numList.map(num) =>(
//                <li> {num} </li>
//        )}
//        </h2>
//    )
//}

const RecordList = ({numList}) =>{
     return (
         <div>
             <h2> 기록된 숫자 </h2>
             {numList.length > 0?1
             :<div>기록없음</div>}
         </div>
     )
 }

const App = () => {
    const [numList, setNumList] = useState([]);

   return(
   <div>
    <RecordForm numList={numList} setNumList={setNumList} />
    <RecordList numList={numList} />
    </div>
   )
}



export default App;