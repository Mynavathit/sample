import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './OtherComponents/FirstComponent';
import About from './OtherComponents/About';
import cards from './OtherComponents/map_compo';
import Links from './OtherComponents/Links';
import Posts from './OtherComponents/Posts';

function App() {
  return (
    <div className="App">
      <body>
       <div className="header">
          <h1>My Website</h1>
          <p>Resize the browser window to see the effect.</p>
        </div>

        <Links Link1="Link1" Link2="Link2" Link3="Link3" Link4="Link4" />
        
        <div className="row">
          <div className="leftcolumn">
            {
              cards.map((cards, i) =>
              <CardList title={cards.title} description={cards.description} p_text1={cards.p_text1} p_text2={cards.p_text2} />
              )
            }
            {/*<CardList title="TITLE HEADING1" description="Title description, Dec 7, 2017" p_text1="Welcome to this page" p_text2="Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."/>
            <CardList title="TITLE HEADING2" description="Title description, Sep 2, 2017" p_text1="Welcome to middle of this page" p_text2="Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."/> */}
          </div>

          <div className="rightcolumn">
            <About title="About Me" p_text1="Some text about me in culpa qui officia deserunt mollit anim.."/>
            
            <Posts title1="Image1" title2="Image2" title3="Image3"/>
                  
            <div className="card">
              <h3>Follow Me</h3>
              <p>Some text..</p>
            </div>

          </div>

        </div>

        <div className="footer">
          <h2>Footer</h2>
        </div>

      </body>
    </div>
  );
}

export default App;
