import React from 'react';
import './App.css';
import LoginForm from './pages/LoginForm';

class  App extends React.Component {
  render()
  {
    return (
      <div className="App">
      <center><LoginForm/></center> 
       </div>
    );
  }
}

export default App;
