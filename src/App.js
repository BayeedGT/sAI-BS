import React from 'react';
import './App.css';

import Sidebar from './Sidebar';
import Topnavbar from './Topnavbar';
import SenSentence from './SenSentence';
import SenParagraph from './SenParagraph'

import {BrowserRouter, Route} from 'react-router-dom'
import EmoSentence from './EmoSentence';
import EmoParagraph from './EmoParagraph';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="row">
          <Topnavbar/>
        </div>
        <div className="row">
          <div className="col">
            <Sidebar/>
          </div>
          <div className="col-10 maindiv">
            <Route exact path='/' component={SenSentence}/>
            <Route path='/Sentiment/Paragraph' component={SenParagraph}/>
            <Route path='/Emotion/Sentences' component={EmoSentence}/>
            <Route path='/Emotion/Paragraph' component={EmoParagraph}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
