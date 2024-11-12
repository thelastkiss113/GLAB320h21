// src/App.jsx
import React from 'react';

function Header() {
  return (<h1>Simple React Application with Vite</h1>);
}

function Content(props) {
  return (
    <p style={{ color: props.color }}>
      {props.text}
    </p>
  );
}

function Footer() {
  return (<h1>Created by Me, of course.</h1>);
}

function App() {
  return (
    <>
      <Header />
      <Content color="blue" text="This is my first React Application with Vite!" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer />
    </>
  );
}

export default App;
