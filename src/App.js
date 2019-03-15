import React, { Component } from 'react';
import NavBar from './components/Layouts/NavBar.jsx';
import ViewCollation from './components/Layouts/ViewCollation.jsx';
import MainContent from './components/Layouts/MainContent.jsx';
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <NavBar />
        <MainContent />          
      </div>
      </Provider>
    );
  }
}

export default App;
