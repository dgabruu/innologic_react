import React from 'react'
import Nav from './nav'
import Main from './main'
import Head from './head'
import './App.css';

class App extends React.Component {

  render(){
  return (
    <div className="App">

       <Nav />
      
   
     <Main />
     <Head />
     
    </div>
  );
}
}

export default App;
