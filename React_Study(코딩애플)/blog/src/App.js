/* eslint-disable */
// 워닝 메세지 없애기

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// App.js 는 메인페이지에 들어갈 HTML 짜는 곳
function App() {
  let topics = ['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'];
  let attr = { color : 'white', fontSize : '16px' }
  let post = '강남 우동 맛집';

  let [글제목, _글제목] = useState(topics);
  // let [logo, setLogo] = useState('ReactBlog');
  // State 가 필요할 때만. -> 자주 변경이 될거같은... 
  let [좋아요, _좋아요] = useState(0);

  return (
    <div className="App">
      {/* 상단메뉴 */}
      <div className="black-nav">
        <h4 style={ attr }>ReactBlog</h4>
      </div>

      <button onClick={ ()=>{
        let copy = [...글제목];
        _글제목(copy.sort());
      }}>
        가나다순 정렬
      </button>

      <button onClick={ () =>{
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        _글제목(copy); } } >
          1번째 게시글 글수정
        </button>

      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={ ()=>{ _좋아요(좋아요++); } }>👍🏻</span> { 좋아요 } </h4>
        <p>10월 26일 발행</p>
      </div>

      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>10월 26일 발행</p>
      </div>

      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>10월 26일 발행</p>
      </div>

      {/* {변수명 or 함수(리턴값) or logo(임포트 해 온 이미지)} : 데이터 바인딩 */}
      <h4>{ post }</h4>

      <Modal/>
      {/* 반복적인 html, 큰페이지들, 자주변경되는html : 컴포넌트를 쓰면 좋을 상황*/}

    </div>
  );
}

function Modal() {
  return (
  <div className='model'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}
// 다른 방식으로 만드는 법
/*
  // 고치려 하면 오류를 출력해준다.
  const Modal = () => {
    return(
      태그
    )
  }
*/


export default App;
