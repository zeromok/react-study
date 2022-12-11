import './App.css';
import {useState} from 'react';

// ===========================
// 컴포넌트 = 사용자 정의 태그
// props : Object, 태그의 속성을 가지고 있다.
// ===========================

// Header 컴포넌트
function Header(props) {
  return (
    <header>
        <h1>
          <a href='/' onClick={ (event) => {
          event.preventDefault();
          props.onChangeMode();
        }}>
          {props.title}
        </a>
      </h1>
      </header>
  );
}

// Nav 컴포넌트
function Nav(props) {
  const lis = [];
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    // 동적으로 만들어주는 태그에는 고유한 속성인 key(props) 를 가지고 있어야 한다.(반복문 안에서 고유해야 한다.)
    lis.push(<li key={t.id}><a id={t.id} href={'/read/' + t.id} onClick={ (event) => {
      event.preventDefault();
      props.onChangeMode(Number(event.target.id));
    }}>
        {t.title}
      </a></li>);
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}

// Aticle 컴포넌트
function Aticle(props) {
  return (
    <div className='article'>
      <aticle>
        <h2>
          {props.title}
        </h2>
        {props.body}
      </aticle>
    </div>
  );
}

// Create 컴포넌트
function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={ (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
      }}>
        <p>
          <input name='title' type='text' placeholder='title'></input>
        </p>
        <p>
          <textarea name='body' placeholder='body'></textarea>
        </p>
        <p>
          <input type='submit' value='Create'></input>
        </p>
      </form>
    </article>
  );
}

// Update 컴포넌트
function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return(
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

function App() {
  
  const [id, setId] = useState(null);
  const [topics, setTopics] = useState([
    {id:1, title:'Html', body:'Html is ...'},
    {id:2, title:'Css', body:'Css is ...'},
    {id:3, title:'JavaScript', body:'JavaScript is ...'}
  ]);
  const [mode, setMode] = useState('WELCOME');
  let content = null;
  let contextControl = null;

  if(mode === 'WELCOME') {
    content = <Aticle title='Welcome' body='Hello, WEB'></Aticle>
  } else if(mode === 'READ') {
    let title = null;
    let body = null;
    for(let i=0; i<topics.length; i++) {
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Aticle title={title} body={body}></Aticle>

    contextControl = <>
    <li><a href={'/update/' + id} onClick={ (event) => {
      event.preventDefault();
      setMode('UPDATE');
    }}>Update</a></li>
    <li>
      <input type='button' value='Delete' onClick={ () => {
        const newTopics = [];
        for(let i=0; i<topics.length; i++) {
          if(topics[i].id !== id) {
            newTopics.push(topics[i]);
          }
        }
        setTopics(newTopics);
        setMode('WELCOME')
      }}></input>
    </li>
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
    let title = null;
    let body = null;
    for(let i=0; i<topics.length; i++) {
      if(topics[i].id === id) {
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

  return (
  /*

    <div>
      <header>
        <h1><a href="/">WEB</a></h1>
      </header>

      <nav>
        <ol>
          <li><a href="/read/1"></a>Html</li>
          <li><a href="/read/2"></a>Css</li>
          <li><a href="/read/3"></a>JavaScript</li>
        </ol>
      </nav>

      <article>
        <h2>Welcome</h2>
        Hello, WEB
      </article>
    </div>

  */

    <div>
      <Header title='WEB' onChangeMode={ () => {
        setMode('WELCOME');
      }}>
      </Header>

      <Nav topics={topics} onChangeMode={ (id) => {
        setMode('READ');
        setId(id);
      }}>
      </Nav>

      {/* aticle */}
      {content}

      <ul>
        <li>
          <a href='/create' onClick={ (event) => {
            event.preventDefault();
            setMode('CREATE');
          }}>
            Create
          </a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
