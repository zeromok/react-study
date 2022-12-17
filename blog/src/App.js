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
    {id : 1, title : '자바 독학', data : '12월 17일 발행', body : '자바는...'},
    {id : 2, title : '리액트 독학', data : '12월 17일 발행', body : '리액트는...'},
    {id : 3, title : '자바 스크립트 독학', data : '12월 17일 발행', body : '자바 스크립트는...'}
  ]);
  let [mode, setMode] = useState('Welcome, My Blog');
  let [id, setId] = useState(null);
  let content = null;

  if(mode === 'Welcome, My Blog') {
    content = <Header  title={'Welcome, My Blog'}></Header>
  }else if(mode === 'READ') {
    let title, body, data = null;
    for(let i=0; i<post.length; i++){
      if(post[i].id === id){
        title = post[i].title;
        data = post[i].data;
        body = post[i].body;
      }
    }
    content = <Modal title={title} data={data} body={body} ></Modal>
  }

  return (
    <div className="App">
      
      <div className="blog">
        <h2>New React Study Blog</h2>
      </div>

      <div>
        {/* 블로그 글 제목들 */}
        <Post post={post} onChangeMode={ (id) => {
          setMode('READ');
          setId(id);
        }} ></Post>
      </div>

      {content}

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
            <a id={element.id} href={"/read/" + element.id} onClick={ (event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
            }}>
              {element.title}
            </a>
          </h4>
          <p>{element.data}</p>
          <a onClick={ (event) => {
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

function Header(props) {
  return(<>
    <div>
      <h1>{props.title}</h1>
    </div>
  </>);
}

function Modal(props) {
  return (<>
    <div>
      <h1>{props.title}</h1>
    </div>
    <div className='modal'>
      <p>제목 : {props.title}</p>
      <p>발행 일시 : {props.data}</p>
      <p>상세 내용 : {props.body}</p>
    </div>
  </>);
}

export default App;
