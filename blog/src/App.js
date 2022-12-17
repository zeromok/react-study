import './App.css';
/* state 사용하기 */
import {useState}from 'react';

/*
  리액트에서 <div> 만드는법 :
    React.createElement('div', null, 'Hello Would');

  JSX를 이용한 방법 : 리액트안에서 html문법으로 작성하면 리액트로 받아들인다.
    <div></div>
*/

function App() {
  // let post = ['자바 독학', '리액트 독학', '자바 스크립트 독학'];
  let [post, setpost] = useState([
    {title : '자바 독학', data : '12월 17일 발행'},
    {title : '리액트 독학', data : '12월 17일 발행'},
    {title : '자바 스크립트 독학', data : '12월 17일 발행'}
  ]);

  return (
    <div className="App">
      <div className="blog">
        <h2>Blog</h2>
      </div>

      <div>
        {/* 블로그 글 제목들 */}

        <div className='post'>
          <h4>{post[0].title}</h4>
          <p>{post[0].data}</p>
        </div>

        <div className='post'> 
          <h4>{post[1].title}</h4>
          <p>{post[1].data}</p>
        </div>

        {/* 스타일을 넣는 다른 방법 */}
        <div style={
            {
              paddingLeft : '20px',
              textAlign : 'left',
              borderBottom : '1px solid grey'
            }
          }>
          <h4>{post[2].title}</h4>
          <p>{post[2].data}</p>
        </div>

      </div>

    </div>
  );
}

export default App;
