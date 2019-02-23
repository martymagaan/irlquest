import React, { useState } from 'react';
import './App.css';
import QuestList from './components/QuestList';

function App() {
  const [quests, setQuests] = useState([{name: 'Quest 1'}, {name: 'Quest 2'}]);

  return (
    <div className="App">
      <div className="container row">
        <QuestList quests={quests} />
      </div>
    </div>
  );
}

export default App;
