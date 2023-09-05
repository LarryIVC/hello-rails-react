// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


const API = 'http://127.0.0.1:3000/api/random_greeting';


function Greeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setGreeting(data.greeting);
      });
  }, []);

  return (
    <h2>Your greeting is: {greeting}</h2>
  )
}

function App() {
  return (
    <>
      <h1>Hello, React on Rails!</h1>
      <Greeting />
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);