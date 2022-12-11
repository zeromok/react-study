
import './App.css';
// State를 사용하기 위한 import
import {useState} from 'react';

// 컴포넌트 = 사용자 정의 태그
function Header(props){
  // (props) : 내가만든 컴포넌트에 props(속성) 을 넣어줌, 외부자를 위한 데이터
  return (
  <header>
  <h1><a href="/" onClick={(event)=>{
    // onClick={function(event){ -> a 태그를 눌렀을 때 함수가 호출
    // event : 리액트가 주입해주는 파라미터, 이벤트 상황을 제어할 수 있는 여러가지 정보와 기능이 들어가 있음
    event.preventDefault(); // 기본동작 방지 ex) 클릭해도 리로드(새로고침) 되지 않는다.
    props.onChangeMode(); // 속성으로 전달된 함수를 호출
  }}>{props.title}</a></h1>
  {/* {} : 표현식으로 취급 */}
  </header>
  );
  // 리턴값으로 오는 html문법은 순수한 html문법이 아니다. -> 유사 html
  // 리액트가 해석해서 브라우저로 컨버팅
}

function Nav(props){
  // props 에 topics 가 주입
  const lis = [
    // <li><a href="/read/1">html</a></li>,
    // <li><a href="/read/2">css</a></li>,
    // <li><a href="/read/3">js</a></li>
    // 배열로 만들어 Nav안에서 관리, topics 처럼 외부에서 만들어 주입되는 방식과는 다른 방식
    // 차이점 : 외부에서 주입되는 방법은 재활용성이 떨어짐 공통된 데이터가 아닌 바뀔 수 있는 데이터는 외부에서 관리
    //          공통된 데이터는 컴포넌트 내부에서 관리하는게 좋다.
  ]
  for(let i=0; i<props.topics.length; i++){     
    let t = props.topics[i];
    lis.push(<li key={t.id} ><a id={t.id} href={"/read/"+t.id} onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode(Number(event.target.id));
      // id 값을 전달하기 위해 a태그에 id속성을 만들어주고 주입
    }}>{t.title}</a></li>)
    // 위 비어있는 lis 배열에 동적으로 넣어준다.
    // 리액트가 좀 더 잘 동작할 수 있도록 key를 설정 (유니크), 반복문안에서 고유하면 된다.
  }
  return (
  <nav>
    <ol>
     {lis}
     {/* 리액트에 의해 배열을 넣으면 자동으로 배치 시켜 준다. */}
    </ol>
  </nav>
  );
}

function Aticle(props) {
  return (
  <aticle>
    <h2>{props.title}</h2>
    {props.body}
  </aticle>
  );
}

function Create(props) {
  return(
    <aticle>
      <h2>Create</h2>
      <form onSubmit={ (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body);
      }}>
        <p>
          <input type="text" name='title' placeholder='title' />
        </p>
        <p>
          <textarea name='body' placeholder='body'></textarea>
        </p>
        <p>
          <input type='submit' value='Create'></input>
        </p>
      </form>
    </aticle>
  );
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <aticle>
      <h2>Update</h2>
      <form onSubmit={ (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body);
      }}>
        <p>
          <input type="text" name='title' placeholder='title' value={title} onChange={ (event) => {
            setTitle(event.target.value);
          }} />
        </p>
        <p>
          <textarea name='body' placeholder='body' value={body} onChange={ (event) => {
            setBody(event.target.value);
          }}></textarea>
        </p>
        <p>
          <input type='submit' value='Update'></input>
        </p>
      </form>
    </aticle>
  );
}


function App(){
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'Html', body:'Html is ...'},
    {id:2, title:'Css', body:'Css is ...'},
    {id:3, title:'JavaScript', body:'JavaScript is ...'}
  ]); // 목록들도 하드코딩 말고 props로 관리해 주입된 값으로 만들어지게끔...(객체배열)
  // state : 내부자를 위한 데이터
  // useState 는 배열을 리턴하고, 0번쨰 값은 상태의 값(초기값), 1번째 값은 상태의 값을 변경할때 사용
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME');  // 위 3줄과 같은 문법(축약)***
  const [id, setId] = useState(null);
  let content = null;
  let contextControl = null;
  if(mode === 'WELCOME'){
    content = <Aticle title='Welcome' body='Hello, WEB'></Aticle>
  }else if(mode === 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    // content = <Aticle title='Read' body='Hello, READ'></Aticle>
    content = <Aticle title={title} body={body}></Aticle>
    contextControl = <>
    <li><a href={'/update/' + id} onClick = { (event) => {
      event.preventDefault();
      setMode('UPDATE');
    }}>Update</a></li>
    <li><input type='button' value='Delete' onClick={ () => {
      const newTopics = [];
      for(let i=0; i<topics.length; i++) {
        if(topics[i].id !== id) {
          newTopics.push(topics[i]);
        }
      }
      setTopics(newTopics);
      setMode('WELCOME');
    }}></input></li>
    </>
  } else if(mode === 'CREATE') {
    content = <Create onCreate = { (_title, _body) => {
      const newTopic = {id:nextId, title:_title, body:_body}
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);
    }}></Create>
  } else if(mode === 'UPDATE') {
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title = {title} body = {body} onUpdate = { (_title, _body) => {
      const updateTopic = {id:id, title:_title, body:_body};
      const newTopics = [...topics]
      for(let i=0; i<newTopics.length; i++) {
        if(newTopics[i].id === id) {
          newTopics[i] = updateTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('READ');
      
    }}></Update>
  }

  return(
    <div>
      <Header title="WEB" onChangeMode={()=>{
        // 컴포넌트에 이벤트를 추가해보자 = onChangeMode(이벤트 핸들러)
        // alert('Header');
        // mode = 'WELCOME';
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        // alert(id);
        // mode = 'READ';
        setMode('READ');
        setId(id);
      }}></Nav>
      {/* 위에서 만든 topics를 그 자체로 전달 : {} */}
      {/* <Aticle title="Welcome" body="Hello, WEB"></Aticle> */}
      {content} <br></br>
      <ul>
        <li>
          <a href="/create" onClick={(event) => {
            event.preventDefault();
            setMode('CREATE');
          }}>Create</a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}


export default App;
