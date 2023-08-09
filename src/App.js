import React, {useState} from 'react';
import './App.css';

function App() {


    let [글제목, 글제목변경] = useState(['강남 맛집', '의정부 맛집', '양주 맛집']);
    let [따봉, 따봉변경] = useState(0);
    let posts = '강남 고기 맛집';

    function 제목변경(){
        var newArray = [...글제목];
        newArray[0] = '여자코트 추천';
        글제목변경(newArray);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <div>개발자 blog</div>
            </div>

            <button onClick={제목변경}>버튼</button>

            <div className="list">
                <h3>{글제목[0]} <span onClick={() => {
                    따봉변경(따봉 + 1)
                }}>👍</span> {따봉} </h3>
                <p>2월 17일 작성</p>
                <hr/>
            </div>
            <div className="list">
                <h3>{글제목[1]}</h3>
                <p>2월 18일 작성</p>
                <hr/>
            </div>
            <div className="list">
                <h3>{글제목[2]}</h3>
                <p>2월 19일 작성</p>
                <hr/>
            </div>
        </div>
    );
}


export default App;
