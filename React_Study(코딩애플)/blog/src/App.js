/* eslint-disable */
// 워닝 메세지 없애기

import './App.css';
import { useState } from 'react';

// App.js 는 메인페이지에 들어갈 HTML 짜는 곳
function App() {
  let topics = [
    {id : 1, title : '남자 코트 추천', date : '10월 26일 발행', content : '남자 코트는 ...'},
    {id : 2, title : '강남 우동 맛집', date : '10월 26일 발행', content : '강남 우동 맛집은 ...'},
    {id : 3, title : '리액트 독학', date : '10월 26일 발행', content : '리액트 독학은 ...'}
  ];
  let [id, setId] = useState(null);
  let [mode, setMode] = useState('WELLCOME MY BLOG');
  let attr = { color : 'white', fontSize : '16px' }
  let title, date, content = null;
  if(mode === 'WELLCOME MY BLOG') {
    title = <Header title='WELLCOME MY BLOG'></Header>;
  }else if(mode === 'READ') {
    for(const element of topics){
      if(element.id === id){
        
        title = element.title;
        date = element.date;
        content = element.content;
      }
    }
    title = <Header title={title} date={date} content={content}></Header>;
  }
  
  // let [logo, setLogo] = useState('ReactBlog');
  // State 가 필요할 때만. -> 자주 변경이 될거같은... 
  let [좋아요, _좋아요] = useState(0);

  return (
    <div className="App">
      {/* 상단메뉴 */}
      <div className="black-nav">
        <h4 style={ attr }>ReactBlog</h4>
      </div>
  
      <List topics={topics} onChangeMode={ (id) => {
        setMode('READ');
        setId(id);
      }} />

      {/* {변수명 or 함수(리턴값) or logo(임포트 해 온 이미지)} : 데이터 바인딩 */}
      {/* <h4>{ post }</h4> */}
      {title}

      {/* 반복적인 html, 큰페이지들, 자주변경되는html : 컴포넌트를 쓰면 좋을 상황*/}

    </div>
  );
} // App();

function List(props) {
  let [좋아요, _좋아요] = useState(0);
  const list = [];
  for(const element of props.topics) {
    let t = element;
    list.push(
    <div className='list' key={t.id}>
    <h4><a href="/" key={t.id} id={t.id} onClick={ (event) => {
      event.preventDefault();
      props.onChangeMode(Number(event.target.id));
    }}>{t.title}</a></h4>
    <p key={t.id} >{t.date}</p>
  </div>);
  }
  return (
    <>
      {list}
    </>
  )
}

function Header(props) {
  return (
    <>
      <h4>{props.title}</h4>
      <div className='model'>
        <h4>제목 : {props.title}</h4>
        <p>날짜 : {props.date}</p>
        <p>상세내용  : {props.content} </p>
      </div>
    </>
  )
}

export default App;
