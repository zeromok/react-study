import './App.css';

/*
  리액트에서 <div> 만드는법 :
    React.createElement('div', null, 'Hello Would');

  JSX를 이용한 방법 : 리액트안에서 html문법으로 작성하면 리액트로 받아들인다.
    <div></div>
*/

function App() {
  let post = ['자바 독학', '리액트 독학', '자바 스크랩트 독학'];
  return (
    <div className="App">
      <div className="blog">
        <h2>Blog</h2>
      </div>

      <div >
        {/* 블로그 글 제목들 */}
        <h4 className="post">{post[0]}</h4>
        <h4 className="post">{post[1]}</h4>
        {/* 스타일을 넣는 다른 방법 */}
        <h4 style=
        {
          {
            paddingLeft : '20px',
            textAlign : 'left',
            borderBottom : '1px solid grey'
          }
        } >{post[2]}</h4>
      </div>

    </div>
  );
}

export default App;
