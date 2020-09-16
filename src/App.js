import React from 'react';
import './App.css';

import Sidebar from './Sidebar';
import Topnavbar from './Topnavbar';
import Desc from './Desc';
import Sensenform from './Sensenform'

function App() {
  return (
    <div className="App">
      <div className="row">
        <Topnavbar/>
      </div>
      <div className="row">
        <div className="col">
          <Sidebar/>
        </div>
        <div className="col-10 maindiv">
          <div className="dsc">
            <Desc/>
          </div>
          <div> 
            <Sensenform/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
