import React from 'react';
import './App.css';
import Form from './components/form';
import Header from './components/header';

const App: React.FC = () => {
  const addHandler = (title:string) =>{
    console.log("Add new todo ",title)
  }
  return (
    <div >
      <Header />
      <Form onAdd={addHandler}/>
    </div>
  );
}

export default App;
