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
  let [post, setPost] = useState([
    {id : 1, title : '자바 독학', data : '12월 17일 발행', like : 0},
    {id : 2, title : '리액트 독학', data : '12월 17일 발행', like : 0},
    {id : 3, title : '자바 스크립트 독학', data : '12월 17일 발행', like : 0}
  ]);

  return (
    <div className="App">
      <div className="blog">
        <h2>Blog</h2>
      </div>

      <div>
        {/* 블로그 글 제목들 */}

        <Post post={post}></Post>

      </div>

    </div>
  );
}

function Post(props) {
  let post = [];
  let [like, setLike] = useState([0, 0, 0, 0])

  for(let element of props.post) {
    let id = element.id;
    post.push(
      <div key={element.id} className='post'>
          <h4>
            <a href={"/read/" + element.id} onClick={ (event) => {
            event.preventDefault();
            }}>
              {element.title}
            </a>
          </h4>
          <p>{element.data}</p>
          <a key={element.id} onClick={ (event) => {
            event.preventDefault();
            let copy = [...like]
            copy[id]++;
            setLike(copy);
          }}>
            ❤️ : { like[id] }
          </a>
      </div>
    );
  }
  
  return (<>
    {post}
  </>
  );
}

export default App;
